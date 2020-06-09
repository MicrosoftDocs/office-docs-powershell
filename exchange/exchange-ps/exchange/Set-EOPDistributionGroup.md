---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/set-eopdistributiongroup
applicable: Exchange Online Protection
title: Set-EOPDistributionGroup
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "eop-ps"
---

# Set-EOPDistributionGroup

## SYNOPSIS
This cmdlet is available only in Exchange Online Protection.

Use the Set-EOPDistributionGroup cmdlet to modify distribution groups or mail-enabled security groups in standalone Exchange Online Protection (EOP) organizations without Exchange Online mailboxes. This cmdlet isn't available in EOP that's included with Exchange Enterprise CAL with Services licenses in on-premises Exchange; use the Set-DistributionGroup cmdlet instead.

Typically, standalone EOP organizations that also have on-premises Active Directory use directory synchronization to create users and groups in EOP. However, if you can't use directory synchronization, then you can use cmdlets to create and manage users and groups in EOP.

This cmdlet uses a batch processing method that results in a propagation delay of a few minutes before the results of the cmdlet are visible.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-EOPDistributionGroup [-Identity <DistributionGroupIdParameter>]
 [-Alias <String>]
 [-DisplayName <String>]
 [-ExternalDirectoryObjectId <String>]
 [-ManagedBy <String[]>]
 [-PrimarySmtpAddress <SmtpAddress>]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-EOPDistributionGroup -Identity "Security Team" -PrimarySmtpAddress NewSecTeamId@Contoso.com
```

This example changes the current SMTP address of the Security Team EOP distribution group to "NewSecTeamId@Contoso.com".

## PARAMETERS

### -Identity
The Identity parameter specifies the distribution group or mail-enabled security group that you want to modify. You can use any value that uniquely identifies the group. For example:

- Name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

```yaml
Type: DistributionGroupIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Alias
The Alias parameter specifies the alias of the distribution group.

The value of Alias can contain letters, numbers and the characters !, #, $, %, &, ', \*, +, -, /, =, ?, ^, \_, \`, {, |, } and ~. Periods (.) are allowed, but each period must be surrounded by other valid characters (for example, help.desk). Unicode characters from U+00A1 to U+00FF are also allowed. The maximum length of the Alias value is 64 characters.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisplayName
The DisplayName parameter specifies the name of the distribution group in the Exchange admin center (EAC).

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalDirectoryObjectId
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ManagedBy
The ManagedBy parameter specifies one or more group owners. A group must have at least one owner. You can use any value that uniquely identifies the owner. For example:

- Name

- Alias

- Distinguished name (DN)

- Canonical DN

- \<domain name\>\\\<account name\>

- Email address

- GUID

- LegacyExchangeDN

- SamAccountName

- User ID or user principal name (UPN)

You can specify multiple owners by using the following syntax: @("\<user1\>","\<user2\>"...). The values that you specify will overwrite the current list of owners.

The users specified with the ManagedBy parameter aren't automatically members of the distribution group. If you want any of the owners to be added as members of the distribution group, you need to add them by using the Update-EOPDistributionGroupMember cmdlet.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PrimarySmtpAddress
The PrimarySmtpAddress parameter specifies the primary return SMTP email address for the distribution group.

```yaml
Type: SmtpAddress
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online Protection

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
