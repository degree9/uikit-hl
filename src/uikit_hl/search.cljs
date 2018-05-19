(ns uikit-hl.search
  (:require [hoplon.core :as hl]
            [uikit-hl.core :as core]))

(defmethod hl/do! :uk-search
  [elem _ v]
  (hl/do! elem :class/uikit {:uk-search v}))

(hl/defelem search [attr kids]
  (hl/form attr :uk-search true kids))

(defmethod hl/do! :uk-search-input
  [elem _ v]
  (hl/do! elem :class/uikit {:uk-search-input v}))

(hl/defelem input [attr kids]
  (hl/input attr :uk-search-input true :type "search" kids))
