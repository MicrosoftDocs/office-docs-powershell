---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/set-atppolicyforo365
applicable: Exchange Online, Exchange Online Protection
title: Set-AtpPolicyForO365
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Set-AtpPolicyForO365

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Set-AtpPolicyForO365 cmdlet to modify the settings for the following features in Microsoft Defender for Office 365:

- Safe Links protection for supported Office 365 apps.
- Safe Documents: Uses Microsoft Defender for Endpoint to scan documents and files that are opened in Protected View in Microsoft 365 apps for enterprise.
- Safe Attachments for SharePoint, OneDrive, and Microsoft Teams.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-AtpPolicyForO365 [[-Identity] <AtpPolicyForO365IdParameter>]
 [-AllowClickThrough <Boolean>]
 [-AllowSafeDocsOpen <Boolean>]
 [-BlockUrls <MultiValuedProperty>]
 [-Confirm]
 [-EnableATPForSPOTeamsODB <Boolean>]
 [-EnableSafeDocs <Boolean>]
 [-EnableSafeLinksForO365Clients <Boolean>]
 [-TrackClicks <Boolean>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Safe Links protection for Office 365 apps checks links in Office documents, not links in email messages. For more information, see [Safe Links settings for Office 365 apps](https://docs.microsoft.com/microsoft-365/security/office-365-security/atp-safe-links#safe-links-settings-for-office-365-apps).

Safe Documents scans documents and files that are opened in Protected View. For more information, see [Safe Documents in Microsoft 365 E5](https://docs.microsoft.com/microsoft-365/security/office-365-security/safe-docs).

Safe Attachments for SharePoint, OneDrive, and Microsoft Teams prevents users from opening and downloading files that are identified as malicious. For more information, see [Safe Attachments for SharePoint, OneDrive, and Microsoft Teams](https://docs.microsoft.com/microsoft-365/security/office-365-security/atp-for-spo-odb-and-teams).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-AtpPolicyForO365 -EnableATPForSPOTeamsODB $true
```

This example enables Safe Documents and Safe Attachments for SharePoint, OneDrive, and Microsoft Teams.

## PARAMETERS

### -Identity
The Identity parameter specifies the policy that you want to modify. There's only one policy named Default.

```yaml
Type: AtpPolicyForO365IdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AllowClickThrough
The AllowClickThrough parameter specifies whether to allow users to click through to the original blocked URL in Safe Links protection for Office apps. Valid values are:

- $true: Users are allowed to click through to the original URL in supported Office apps.
- $false: Users aren't allowed to click through to the original URL in supported Office apps. This is the default value.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowSafeDocsOpen
The AllowSafeDocsOpen parameter specifies whether users can click through and bypass the Protected View container even when Safe Documents identifies a file as malicious. Valid values are:

- $true: Users are allowed to exit the Protected View container even if the document has been identified as malicious.
- $false: Users aren't allowed to exit Protected View in case of a malicious detection.

This parameter is meaningful only when the EnableSafeDocs parameter value is $true.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BlockUrls
The BlockUrls parameter specifies the URLs that are always blocked by Safe Links in email messages and Safe Links for Office 365 apps.

To enter multiple values and overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

For details about the entry syntax, see [Entry syntax for the "Block the following URLs" list](https://docs.microsoft.com/microsoft-365/security/office-365-security/atp-safe-links#entry-syntax-for-the-block-the-following-urls-list).

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableATPForSPOTeamsODB
The EnableATPForSPOTeamsODB parameter enables or disables Safe Attachments for SharePoint, OneDrive, and Microsoft Teams. Valid values are:

- $true: Safe Attachments for SharePoint, OneDrive, and Microsoft Teams is enabled. SharePoint Online admins can use the DisallowInfectedFileDownload parameter on the [Set-SPOTenant](https://docs.microsoft.com/powershell/module/sharepoint-online/Set-SPOTenant) cmdlet to control whether users are allowed to download files that are found to be malicious.
- $false: Safe Attachments for SharePoint, OneDrive, and Microsoft Teams is disabled. This is the default value.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableSafeDocs
The EnableSafeDocs parameter enables or disables Safe Documents in Microsoft 365 E5 or Microsoft 365 E5 Security organizations. Valid values are:

- $true: Safe Documents is enabled and will upload user files to Microsoft Defender for Endpoint for scanning and verification.
- $false: Safe Documents is disabled. This is the default value.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableSafeLinksForO365Clients
The EnableSafeLinksForO365Clients parameter enables or disables Safe Links for Office 365 apps. Valid values are:

- $true: Safe Links scanning is enabled in supported Office 365 apps. This is the default value.
- $false: Safe Links scanning is disabled in supported Office 365 apps.

Note that this protection applies to links in Office documents, not links in email messages. Safe Links protection for links in email messages is controlled by Safe Links policies (the [New-SafeLinksPolicy](https://docs.microsoft.com/powershell/module/exchange/new-safelinkspolicy) or [Set-SafeLinksPolicy](https://docs.microsoft.com/powershell/module/exchange/set-safelinkspolicy) cmdlets).

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TrackClicks
The TrackClicks parameter specifies whether to track user clicks related to blocked URLs in Safe Links for Office 365 apps. Valid values are:

- $true: User clicks in supported Office 365 apps are tracked.
- $false: User clicks in supported Office 365 apps aren't tracked. This is the default value.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
