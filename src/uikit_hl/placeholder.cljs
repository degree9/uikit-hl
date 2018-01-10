(ns uikit-hl.placeholder
  (:require [hoplon.core :as hl]))

(defmethod hl/do! :uk-placeholder
  [elem _ v]
  (hl/do! elem :class/uikit {:uk-placeholder v}))

(hl/defelem placeholder [attr kids]
  (hl/div attr :uk-placeholder true kids))
