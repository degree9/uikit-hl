(ns uikit-hl.alert
  (:require [hoplon.core :as hl]
            [uikit-hl.core :as core]))

(def ^:dynamic *uk-alert* "")

(defmethod hl/do! :uk-alert
  [elem _ v]
  (.alert js/UIkit elem (clj->js v)))

(hl/defelem alert [attr kids]
  (let [alert (:uk-alert attr *uk-alert*)
        attr (assoc attr :uk-alert alert)]
    (hl/div attr kids)))
