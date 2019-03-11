(ns uikit-hl.offcanvas
  (:require ["uikit" :as uikit]
            [hoplon.core :as hl]
            [uikit-hl.core :as core]))

(def ^:dynamic *uk-offcanvas* "")

(defmethod hl/do! :uk-offcanvas
  [elem _ v]
  (.offcanvas uikit elem (clj->js v)))

(hl/defelem content [attr kids]
  (hl/div
    (core/assoc-class attr {:uk-offcanvas-content true})
    kids))

(hl/defelem offcanvas [attr kids]
  (let [offcanvas (:uk-offcanvas attr *uk-offcanvas*)
        attr (assoc attr :uk-offcanvas offcanvas)]
    (hl/div attr kids)))

(hl/defelem bar [attr kids]
  (hl/div
    (core/assoc-class attr {:uk-offcanvas-bar true})
    kids))
