(ns uikit-hl.breadcrumb
  (:require [hoplon.core :as hl]
            [uikit-hl.core :as core]))

(hl/defelem breadcrumb [attr kids]
  (let []
    (hl/ul (core/assoc-class attr {:uk-breadcrumb true}) kids)))

(hl/defelem item [attr kids]
  (let []
    (hl/li attr kids)))
