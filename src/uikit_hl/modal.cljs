(ns uikit-hl.modal
  (:require [hoplon.core :as hl]
            ["uikit" :as uikit]
            [uikit-hl.core :as core]
            [uikit-hl.close :as close]))

(def ^:dynamic *uk-modal* "")
(def ^:dynamic *default* nil)
(def ^:dynamic *outside* nil)
(def ^:dynamic *container* nil)
(def ^:dynamic *full* nil)

(defmethod hl/do! :uk-modal
  [elem _ v]
  (.modal uikit elem (clj->js v)))

(hl/defelem modal [attr kids]
  (let [modal (:uk-modal attr *uk-modal*)
        cont  (:container attr *container*)
        full  (:full attr *full*)
        attr  (assoc attr :uk-modal modal)]
    (hl/div (core/assoc-class attr {:uk-modal-container cont
                                    :uk-modal-full      full}) kids)))

(hl/defelem dialog [attr kids]
  (hl/div (core/assoc-class attr {:uk-modal-dialog true}) kids))

(hl/defelem header [attr kids]
  (hl/div (core/assoc-class attr {:uk-modal-header true}) kids))

(hl/defelem body [attr kids]
  (hl/div (core/assoc-class attr {:uk-modal-body true}) kids))

(hl/defelem footer [attr kids]
  (hl/div (core/assoc-class attr {:uk-modal-footer true}) kids))

(hl/defelem title [attr kids]
  (hl/h2 (core/assoc-class attr {:uk-modal-title true}) kids))

(hl/defelem close [attr kids]
  (let [attr (assoc attr :type "button")
        default (:default attr *default*)
        outside (:outside attr *outside*)
        full (:full attr *full*)]
    (hl/a (core/assoc-class attr {:uk-modal-close-default default
                                  :uk-modal-close-outside outside
                                  :uk-modal-close-full full}) kids)))
