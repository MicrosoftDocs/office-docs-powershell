---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/set-atppolicyforo365
applicable: Exchange Online, Exchange Online Protection
title: Set-AtpPolicyForO365
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchonline-ps || eop-ps"
---

# Set-AtpPolicyForO365

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Set-AtpPolicyForO365 cmdlet to modify the Advanced Threat Protection (ATP) policy in Office 365. The ATP policy enables the following protections:

- Safe Links for Office 365 ProPlus desktop clients, web, and mobile apps.

- Safe Documents: Before a user is allowed to trust a file open in Office 365 ProPlus, the file will be verified by Microsoft Defender ATP.

- ATP to protect files in SharePoint Online, OneDrive for Business and Microsoft Teams.

**Note**: We recommend that you use the Exchange Online PowerShell V2 module to connect to Exchange Online PowerShell. For instructions, see [Conect to Exchange Online PowerShell](https://docs.microsoft.com/powershell/exchange/connect-to-exchange-online-powershell).

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
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Safe Links is a feature in Advanced Threat Protection that checks links in email messages to see if they lead to malicious web sites. For more information, see [Office 365 ATP Safe Links](https://docs.microsoft.com/microsoft-365/security/office-365-security/atp-safe-links).

ATP can also protect files in SharePoint Online, OneDrive for Business and Microsoft Teams by preventing users from opening and downloading files that are identified as malicious. For more information, see [ATP for SharePoint, OneDrive, and Microsoft Teams](https://docs.microsoft.com/microsoft-365/security/office-365-security/atp-for-spo-odb-and-teams).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-AtpPolicyForO365 -EnableSafeLinksForClients $true -EnableATPForSPOTeamsODB $true
```

This example enables Safe Links for Office 365 ProPlus clients and ATP for SharePoint Online, OneDrive for Business and Microsoft Teams.

## PARAMETERS

### -Identity
The Identity parameter specifies the ATP policy that you want to modify. There's only one policy named Default.

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
The AllowClickThrough parameter specifies whether to allow users to click through to the original blocked URL in Office 365 ProPlus. Valid values are:

- $true: Users are allowed to click through to the original URL. This is the default value.

- $false: Users aren't allowed to click through to the original URL.

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
The AllowSafeDocsOpen parameter specifies whether users can click through and bypass the Protected View container even when Safe Documents in Microsoft Defender Advanced Threat Protection (MDATP) identifies a file as malicious. Valid values are:

- $true: Users are allowed to exit the Protected View container even if the document has been identified as malicious.

- $false: Users aren't allowed to exit Protected View in case of a malicious detection.


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
The BlockUrls parameter specifies the URLs that are always blocked by Safe Links scanning. You can specify multiple values separated by commas.

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

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

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
The EnableATPForSPOTeamsODB parameter specifies whether Safe Attachments is enabled for SharePoint Online, OneDrive for Business and Microsoft Teams. Valid values are:

- $true: Safe Attachments is enabled for SharePoint Online, OneDrive for Business and Microsoft Teams.

- $false: Safe Attachments is disabled for SharePoint Online, OneDrive for Business and Microsoft Teams. This is the default value.

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
The EnableSafeDocs parameter specifies whether to enable the Safe Documents feature in the organization. Valid values are:

- $true: Safe Documents is enabled and will upload user files to Microsoft Defender Advanced Threat Protection (MDATP) for scanning and verification.

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
The EnableSafeLinksForO365Clients parameter specifies whether Safe Links is enabled for Microsoft 365 apps on desktop and mobile clients. Valid values are:

- $true: Safe Links are enabled for Microsoft 365 desktop and mobile apps. This is the default value.

- $false: Safe Links are disabled for Microsoft 365 desktop and mobile apps.

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
The TrackClicks parameter specifies whether to track user clicks related to blocked URLs. Valid values are:

- $true: User clicks are tracked. This is the default value.

- $false: User clicks aren't tracked.

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

###  

## OUTPUTS

###  

## NOTES

## RELATED LINKS
