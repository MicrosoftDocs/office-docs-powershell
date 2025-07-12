---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/get-tenantallowblocklistspoofitems
applicable: Exchange Online, Security & Compliance, Exchange Online Protection
title: Get-TenantAllowBlockListSpoofItems
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# Get-TenantAllowBlockListSpoofItems

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-TenantAllowBlockListSpoofItems cmdlet to view spoofed sender entries in the Tenant Allow/Block List.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-TenantAllowBlockListSpoofItems [[-Identity] <HostedConnectionFilterPolicyIdParameter>]
 [-Action <String>]
 [-SpoofType <String>]
 [<CommonParameters>]
```

## DESCRIPTION
The Get-TenantAllowBlockListSpoofItems cmdlet returns the following information:

- Identity: A random Guid assigned to the spoof pair. This will be used as an **Id parameter** while updating or deleting the spoof pair using **Set-TenantAllowBlockListSpoofItems** and **Remove-TenantAllowBlockListSpoofItems**.
- SpoofedUser: The sending email address if the domain is one of your organization's domains or the sending domain if the domain is external.
- SendingInfrastructure: The true sending domain that's found in the DNS record of the source email server. If no domain is found, the source email server's IP address is shown.
- SpoofType: Indicates whether the domain is internal to your organization or external.
- Action: The two possible values are Allow (messages that contain any spoofed sender email addresses in your organization are allowed from the source email server) or Block (messages that contain any spoofed sender email addresses in your organization are not allowed from the source email server).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-TenantAllowBlockListSpoofItems -SpoofType Internal
```
This example returns the list of internal spoof pairs.

### Example 2
```powershell
Get-TenantAllowBlockListSpoofItems -Action Block
```
This example returns the list of blocked spoof pairs.

### Example 3
```powershell
Get-TenantAllowBlockListSpoofItems | Format-Table SpoofedUser,SendingInfrastructure,SpoofType,Action
```

This example returns the list of spoof pairs that appear to be sending spoofed email to your organization.

### Example 4
```powershell
$file = "C:\My Documents\Spoof Tenant Allow Block List.csv"

Get-TenantAllowBlockListSpoofItems | Export-Csv $file
```

This example exports the same list of spoofed pairs to a CSV file.

## PARAMETERS

### -Identity
The Identity parameter is available but isn't used.

```yaml
Type: HostedConnectionFilterPolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

Required: False
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Action
The Action parameter filters the results by action type. Valid values are:

- Allow
- Block

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SpoofType
The SpoofType parameter filters the results by spoof type. Valid values are:

- External
- Internal

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Security & Compliance, Exchange Online Protection

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
