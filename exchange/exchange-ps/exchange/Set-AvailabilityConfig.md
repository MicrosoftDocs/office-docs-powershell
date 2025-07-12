---
external help file: Microsoft.Exchange.CalendarsAndGroups-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/set-availabilityconfig
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
title: Set-AvailabilityConfig
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# Set-AvailabilityConfig

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-AvailabilityConfig cmdlet to set the access level for free/busy information.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-AvailabilityConfig
 [-AllowedTenantIds <MultiValuedProperty>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-OrgWideAccount <SecurityPrincipalIdParameter>]
 [-PerUserAccount <SecurityPrincipalIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The Set-AvailabilityConfig cmdlet defines two accounts or security groups: a per-user free/busy proxy account or group, and an organization-wide free/busy proxy account or group. These accounts and groups are trusted by all availability services in the current organization for availability proxy requests.

For cross-forest availability services to retrieve free/busy information in the current forest, they must be using one of the specified accounts, belong to one of the specified security groups, or have a username and password for one of the specified accounts or security groups.

In Exchange Online, this cmdlet lets you update the set of tenant ids that free/busy information sharing is allowed with.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-AvailabilityConfig -PerUserAccount exchangeserversgroup@fabrikam.com
```

In on-premises Exchange, this example is useful with a trusted cross-forest Availability service. If the remote forest is trusted, and a per-user free/busy proxy account or group in the remote forest is configured to use the service account, the configuration is added to the current forest to authorize the Microsoft ActiveSync request from the remote forest.

### Example 2
```powershell
Set-AvailabilityConfig -OrgWideAccount orgwide@contoso.com
```

In on-premises Exchange, this example is useful if the remote forest isn't trusted. Because this account is used for a cross-forest free/busy proxy account or group, minimize security vulnerabilities by using the credentials of a user who doesn't have an Exchange mailbox. When you're prompted, type the username and password.

### Example 3
```powershell
Set-AvailabilityConfig -AllowedTenantIds "d6b0a40e-029b-43f2-9852-f3724f68ead9","87d5bade-cefc-4067-a221-794aea71922d"
```

In Exchange Online, this example allows free/busy sharing only with the specified tenants.

## PARAMETERS

### -AllowedTenantIds
This parameter is available only in the cloud-based service.

The AllowedTenantIds parameter specifies the tenant ID values of Microsoft 365 organization that you want to share free/busy information with (for example, d6b0a40e-029b-43f2-9852-f3724f68ead9). You can specify multiple values separated by commas. A maximum of 25 values are allowed.

To replace all existing tenant IDs with the values you specify, use the following syntax: `"TenantID1","TenantID2",..."TenantID25"`.

To add or remove tenant IDs without affecting other existing values, use the following syntax: `@{Add="TenantID1","TenantID2",...; Remove="TenantID3","TenantID4",...}`.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OrgWideAccount
This parameter is functional only in on-premises Exchange.

The OrgWideAccount parameter specifies who has permission to issue proxy Availability service requests on an organization-wide basis. You can specify the following types of users or groups (security principals) for this parameter:

- Mailbox users
- Mail users
- Security groups

You can use any value that uniquely identifies the user or group. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Domain\\Username
- Email address
- GUID
- LegacyExchangeDN
- SamAccountName
- User ID or user principal name (UPN)

```yaml
Type: SecurityPrincipalIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PerUserAccount
This parameter is available only in on-premises Exchange.

The PerUserAccount parameter specifies an account or security group that has permission to issue proxy Availability service requests on a per-user basis.

You can use any value that uniquely identifies the user or group. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Domain\\Username
- Email address
- GUID
- LegacyExchangeDN
- SamAccountName
- User ID or user principal name (UPN)

```yaml
Type: SecurityPrincipalIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

### Input types
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
