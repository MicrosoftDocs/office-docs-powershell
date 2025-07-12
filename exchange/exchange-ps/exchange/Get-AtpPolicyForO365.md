---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/get-atppolicyforo365
applicable: Exchange Online
title: Get-AtpPolicyForO365
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# Get-AtpPolicyForO365

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-AtpPolicyForO365 cmdlet to view the settings for the following features in Microsoft Defender for Office 365:

- Safe Links protection for supported Office 365 apps.
- Safe Documents: Uses Microsoft Defender for Endpoint to scan documents and files that are opened in Protected View in Microsoft 365 apps for enterprise.
- Safe Attachments for SharePoint, OneDrive, and Microsoft Teams.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-AtpPolicyForO365 [[-Identity] <AtpPolicyForO365IdParameter>]
 [<CommonParameters>]
```

## DESCRIPTION
Safe Links protection for Office 365 apps checks links in Office documents, not links in email messages. For more information, see [Safe Links settings for Office 365 apps](https://learn.microsoft.com/defender-office-365/safe-links-about#safe-links-settings-for-office-apps).

Safe Documents scans documents and files that are opened in Protected View. For more information, see [Safe Documents in Microsoft 365 E5](https://learn.microsoft.com/defender-office-365/safe-documents-in-e5-plus-security-about).

Safe Attachments for SharePoint, OneDrive, and Microsoft Teams prevents users from opening and downloading files that are identified as malicious. For more information, see [Safe Attachments for SharePoint, OneDrive, and Microsoft Teams](https://learn.microsoft.com/defender-office-365/safe-attachments-for-spo-odfb-teams-about).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-AtpPolicyForO365
```

This example returns detailed information about the default policy.

## PARAMETERS

### -Identity
The Identity parameter specifies the policy that you want to modify. There's only one policy named Default.

```yaml
Type: AtpPolicyForO365IdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
