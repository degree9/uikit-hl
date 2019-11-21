(ns uikit-hl.totop
  (:require [hoplon.core :as h]))

(defmulti uk-totop! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem key val]
  (uk-totop! elem key val))

(defmethod uk-totop! ::default
  [elem kw v]
  (h/do! elem :uk-totop (clj->js v)))

(h/defelem totop [attr kids]
  (h/a attr ::uk-totop true kids))
