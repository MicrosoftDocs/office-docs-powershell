---
title: Configure advanced settings for Microsoft Purview Information Protection
ms.author: v-katykoenen
author: kmkoenen
manager: laurawi
ms.date : 04/11/2024
ms.audience: Admin
audience: Admin
ms.topic: article
ms.service: exchange-powershell
ms.reviewer:
ms.localizationpriority: high
ms.collection: Strat_EX_Admin
ms.custom:
ms.assetid:
search.appverid: MET150
description: "Use PowerShell to configure Microsoft Purview Information Protection advanced settings"
---

# Configure advanced settings for Microsoft Purview Information Protection

The following sections describe the available advanced settings for label policies and labels:

- [Label policy advanced setting reference](#label-policy-advanced-setting-reference)
- [Label advanced setting reference](#label-advanced-setting-reference) 

## Label policy advanced setting reference

Use the *AdvancedSettings parameter with New-LabelPolicy and Set-LabelPolicy to define the following settings:

| Setting   | Scenario and instructions |
| -------   | -------   |
| AdditionalPPrefixExtensions   | -------  |
| AttachmentAction   | -------  |
| AttachmentActionTip   | -------  |
| DisableMandatoryInOutlook   | -------  |
| EnableAudit   | -------  |
| EnableContainerSupport   | -------  |
| EnableCustomPermissions   | -------  |
| EnableCustomPermissionsForCustomProtectedFiles   | -------  |
| EnableGlobalization   | -------  |
| EnableLabelByMailHeader   | -------  |
| EnableLabelBySharePointProperties   | -------  |
| EnableOutlookDistributionListExpansion   | -------  |
| EnableRevokeGuiSupport   | -------  |
| EnableTrackAndRevoke   | -------  |
| HideBarByDefault   | -------  |
| JustificationTextForUserText   | -------  |
| LogMatchedContent   | -------  |
| OfficeContentExtractionTimeout   | -------  |
| OutlookBlockTrustedDomains   | -------  |
| OutlookBlockUntrustedCollaborationLabel   | -------  |
| OutlookCollaborationRule   | -------  |
| OutlookDefaultLabel   | -------  |
| OutlookGetEmailAddressesTimeOutMSProperty   | -------  |
| OutlookJustifyTrustedDomains   | -------  |
| OutlookJustifyUntrustedCollaborationLabel   | -------  |
| OutlookRecommendationEnabled   | -------  |
| OutlookOverrideUnlabeledCollaborationExtensions   | -------  |
| OutlookSkipSmimeOnReadingPaneEnabled   | -------  |
| OutlookUnlabeledCollaborationActionOverrideMailBodyBehavior   | -------  |
| OutlookWarnTrustedDomains   | -------  |
| OutlookWarnUntrustedCollaborationLabel   | -------  |
| PFileSupportedExtensions   | -------  |
| PostponeMandatoryBeforeSave   | -------  |
| PowerPointRemoveAllShapesByShapeName   | -------  |
| PowerPointShapeNameToRemove   | -------  |
| RemoveExternalContentMarkingInApp   | -------  |
| RemoveExternalMarkingFromCustomLayouts   | -------  |
| ReportAnIssueLink   | -------  |
| RunPolicyInBackground   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |
| -------   | -------  |




## Label advanced setting reference
