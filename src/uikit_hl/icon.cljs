(ns uikit-hl.icon
  (:require [hoplon.core :as h]
            [uikit-hl.core :as uk]
            ["uikit/dist/js/uikit-icons" :as icons]))

;; Init UIkit Icons ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(.use uk/uikit icons)
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmulti uk-icon! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem key val]
  (uk-icon! elem key val))

(defmethod uk-icon! ::default
  [elem kw v]
  (uk/icon elem v))

(h/defelem icon [attr kids]
  (let [icon (:uk-icon attr (select-keys attr [:icon :ratio]))
        attr (assoc attr :uk-icon icon)]
    (h/span attr)))
