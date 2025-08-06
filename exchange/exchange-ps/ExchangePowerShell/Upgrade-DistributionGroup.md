---
applicable: Exchange Online, Exchange Online Protection
author: chrisda
external help file: Microsoft.Exchange.CalendarsAndGroups-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/upgrade-distributiongroup
schema: 2.0.0
title: Upgrade-DistributionGroup
---

# Upgrade-DistributionGroup

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Upgrade-DistributionGroup cmdlet to upgrade distribution groups to Microsoft 365 Groups. This cmdlet only works on distribution groups, not mail-enabled security groups.

**Note**: Before you use this cmdlet, verify there are no email address policies that you created with the IncludeUnifiedGroupRecipients parameter; otherwise the command will fail. Remove and recreate the email address policies after you upgrade your distribution groups to Microsoft 365 Groups.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Upgrade-DistributionGroup [-DlIdentities] <MultiValuedProperty>
 [-ActionType <String>]
 [-ExecutingUser <RecipientIdParameter>]
 [-Organization <OrganizationIdParameter>]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Upgrade-DistributionGroup -DlIdentities hr@contoso.com,finance@contoso.com
```

This example upgrades the specified distribution groups to Microsoft 365 Groups.

## PARAMETERS

### -DlIdentities

> Applicable: Exchange Online

The DlIdentities parameter specifies the email address of the distribution group that you want to upgrade to a Microsoft 365 Group.

You can specify multiple values separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ActionType

> Applicable: Exchange Online, Exchange Online Protection

This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExecutingUser

> Applicable: Exchange Online, Exchange Online Protection

This parameter is reserved for internal Microsoft use.

```yaml
Type: RecipientIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Organization

> Applicable: Exchange Online, Exchange Online Protection

This parameter is reserved for internal Microsoft use.

```yaml
Type: OrganizationIdParameter
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
