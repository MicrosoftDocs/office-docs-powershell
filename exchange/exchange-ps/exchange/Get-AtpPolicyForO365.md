---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/get-atppolicyforo365
applicable: Exchange Online, Exchange Online Protection
title: Get-AtpPolicyForO365
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchonline-ps || eop-ps"
---

# Get-AtpPolicyForO365

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-AtpPolicyForO365 cmdlet to view the Advanced Threat Protection (ATP) policy in Office 365. The ATP policy enables the following protections:

- Safe Links for Office 365 ProPlus desktop clients and Office Mobile apps.

- Safe Documents: Before a user is allowed to trust a file open in Office 365 ProPlus, the file will be verified by Microsoft Defender ATP.

- ATP to protect files in SharePoint Online, OneDrive for Business and Microsoft Teams.

**Note**: We recommend that you use the Exchange Online PowerShell V2 module to connect to Exchange Online PowerShell. For instructions, see [Use the Exchange Online PowerShell V2 module](https://docs.microsoft.com/powershell/exchange/exchange-online-powershell-v2).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-AtpPolicyForO365 [[-Identity] <AtpPolicyForO365IdParameter>] [<CommonParameters>]
```

## DESCRIPTION
Safe Links is a feature in Advanced Threat Protection that checks links in email messages to see if they lead to malicious web sites. For more information, see [Office 365 ATP Safe Links](https://docs.microsoft.com/microsoft-365/security/office-365-security/atp-safe-links).

ATP can also protect files in SharePoint Online, OneDrive for Business and Microsoft Teams by preventing users from opening and downloading files that are identified as malicious. For more information, see [Office 365 ATP for SharePoint, OneDrive, and Microsoft Teams](https://go.microsoft.com/fwlink/p/?linkid=857638).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-AtpPolicyForO365
```

This example returns detailed information about the ATP policy named Default

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  

## OUTPUTS

###  

## NOTES

## RELATED LINKS
