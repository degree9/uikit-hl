(ns uikit-hl.dotnav
  (:require [hoplon.core :as hl]
            ["uikit" :as uikit]
            [uikit-hl.core :as core]
            [uikit-hl.icon :as icon]))

(defmethod hl/do! :uk-dotnav
  [elem _ v]
  (hl/do! elem :class {:uk-dotnav v}))

(hl/defelem dotnav [attr kids]
  (let [attr (assoc attr :uk-dotnav true)]
    (hl/ul attr kids)))
