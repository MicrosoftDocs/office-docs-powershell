---
applicable: Exchange Online, Exchange Online Protection
author: chrisda
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-unifiedgrouplinks
schema: 2.0.0
title: Get-UnifiedGroupLinks
---

# Get-UnifiedGroupLinks

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-UnifiedGroupLinks cmdlet to view membership and ownership information for Microsoft 365 Groups in your cloud-based organization. To view other properties for Microsoft 365 Groups, use the Get-UnifiedGroup cmdlet.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-UnifiedGroupLinks [-Identity] <UnifiedGroupIdParameter> -LinkType <LinkType>
 [-ResultSize <Unlimited>]
 [<CommonParameters>]
```

## DESCRIPTION
Microsoft 365 Groups are group objects that are available across Microsoft 365 services.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-UnifiedGroupLinks -Identity "Human Resources Department" -LinkType Members
```

This example show the members of the Microsoft 365 Group named Human Resources Department

## PARAMETERS

### -Identity

> Applicable: Exchange Online, Exchange Online Protection

The Identity parameter specifies the Microsoft 365 Group that you want to view. You can use any value that uniquely identifies the Microsoft 365 Group. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

```yaml
Type: UnifiedGroupIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -LinkType

> Applicable: Exchange Online, Exchange Online Protection

The LinkType parameter filters the results by recipient roles in the Microsoft 365 Group. Valid values are:

- Members: Participate in conversations, create Teams channels, collaborate on files, and edit the connected SharePoint site.
- Owners: Add or remove members, delete conversations, changes Team settings, delete the Team, and full control of the connected SharePoint site. A group must have at least one owner.
- Subscribers: Members who receive conversation and calendar event notifications from the group. All subscribers are members of the group, but all members aren't necessarily subscribers (depending on the AutoSubscribeNewMembers property value of the group and when the member was added).

```yaml
Type: LinkType
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize

> Applicable: Exchange Online, Exchange Online Protection

The ResultSize parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use unlimited for the value of this parameter. The default value is 1000.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:

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
