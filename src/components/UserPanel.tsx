import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Settings, Trash2, LogOut, X } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

const UserPanel = () => {
  const { data: session } = useSession();
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [showCookiesModal, setShowCookiesModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [cookiesPreferences, setCookiesPreferences] = useState({
    essential: true,
    analytics: true,
    marketing: true,
  });

  const handleCookies = () => {
    setShowCookiesModal(true);
    setIsPanelOpen(false);
  };

  const handleDeleteAccount = () => {
    setShowDeleteModal(true);
    setIsPanelOpen(false);
  };

  const handleLogout = () => {
    signOut({ callbackUrl: "/" });
  };

  const saveCookiePreferences = () => {
    // Lógica para guardar preferencias de cookies
    alert("Preferencias de cookies guardadas");
    setShowCookiesModal(false);
  };

  const confirmDeleteAccount = () => {
    // Lógica para eliminar cuenta
    alert("Cuenta eliminada");
    setShowDeleteModal(false);
    signOut({ callbackUrl: "/" });
  };

  interface CookieSwitchProps {
    label: string;
    checked: boolean;
    onChange: () => void;
  }

  const CookieSwitch = ({ label, checked, onChange }: CookieSwitchProps) => (
    <div className="flex justify-between items-center py-2">
      <span className="text-gray-700">{label}</span>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="sr-only peer"
        />
        <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all" />
      </label>
    </div>
  );

  return (
    <div className="relative">
      <button
        onClick={() => setIsPanelOpen(!isPanelOpen)}
        className="p-2 hover:bg-gray-100  rounded-full focus:outline-none"
      >
        <Settings className="text-2xl text-yellow-300 hover:text-grape-500" />
      </button>

      <AnimatePresence>
        {isPanelOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg p-6 w-64 z-10"
          >
            <button
              onClick={() => setIsPanelOpen(false)}
              className="absolute top-2 right-2 p-1 hover:bg-gray-100 rounded-full"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Foto y nombre del usuario */}
            <div className="flex items-center mb-4">
              {session && session.user && (
                <>
                  <Image
                    src={session.user.image as string}
                    alt={session.user.name as string}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <span className="font-semibold">{session.user.name}</span>
                </>
              )}
            </div>

            <h2 className="text-xl font-semibold mb-4">Panel de Usuario</h2>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={handleCookies}
                  className="w-full flex items-center text-left p-2 hover:bg-gray-100 rounded"
                >
                  <Settings className="mr-2" size={18} /> Gestionar Cookies
                </button>
              </li>

              <li>
                <button
                  onClick={handleDeleteAccount}
                  className="w-full flex items-center text-left p-2 hover:bg-gray-100 rounded text-red-500"
                >
                  <Trash2 className="mr-2" size={18} /> Eliminar Cuenta
                </button>
              </li>

              <li>
                <hr className="my-2 border-gray-200" />
              </li>

              <li>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center text-left p-2 hover:bg-gray-100 rounded"
                >
                  <LogOut className="mr-2" size={18} /> Cerrar Sesión
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showCookiesModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed mt-32 inset-0  bg-opacity-50 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg p-6 w-11/12 max-w-md max-h-[90vh] overflow-y-auto"
            >
              <h3 className="text-xl font-semibold mb-4">
                Preferencias de Cookies
              </h3>

              <CookieSwitch
                label="Cookies Esenciales"
                checked={cookiesPreferences.essential}
                onChange={() =>
                  setCookiesPreferences((prev) => ({
                    ...prev,
                    essential: !prev.essential,
                  }))
                }
              />

              <CookieSwitch
                label="Cookies Analíticas"
                checked={cookiesPreferences.analytics}
                onChange={() =>
                  setCookiesPreferences((prev) => ({
                    ...prev,
                    analytics: !prev.analytics,
                  }))
                }
              />

              <CookieSwitch
                label="Cookies de Marketing"
                checked={cookiesPreferences.marketing}
                onChange={() =>
                  setCookiesPreferences((prev) => ({
                    ...prev,
                    marketing: !prev.marketing,
                  }))
                }
              />

              <div className="flex justify-end gap-2 mt-6">
                <button
                  onClick={() => setShowCookiesModal(false)}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
                >
                  Cancelar
                </button>
                <button
                  onClick={saveCookiePreferences}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Guardar Preferencias
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal de Eliminar Cuenta */}
      <AnimatePresence>
        {showDeleteModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg p-6 w-11/12 max-w-md max-h-[90vh] overflow-y-auto"
            >
              <h3 className="text-xl font-semibold mb-4">Eliminar Cuenta</h3>
              <p className="text-gray-600 mb-6">
                ¿Estás seguro de que deseas eliminar tu cuenta? Esta acción no
                se puede deshacer.
              </p>

              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
                >
                  Cancelar
                </button>
                <button
                  onClick={confirmDeleteAccount}
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Eliminar Cuenta
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UserPanel;
