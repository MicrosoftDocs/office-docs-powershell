---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/get-globaladdresslist
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
title: Get-GlobalAddressList
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# Get-GlobalAddressList

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-GlobalAddressList cmdlet to view a global address list (GAL) or a set of GALs.

In Exchange Online, this cmdlet is available only in the Address Lists role, and by default, the role isn't assigned to any role groups. To use this cmdlet, you need to add the Address Lists role to a role group (for example, to the Organization Management role group). For more information, see [Add a role to a role group](https://learn.microsoft.com/Exchange/permissions/role-groups#add-a-role-to-a-role-group).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### DefaultOnly
```
Get-GlobalAddressList [-DefaultOnly]
 [-DomainController <Fqdn>]
 [<CommonParameters>]
```

### Identity
```
Get-GlobalAddressList [[-Identity] <GlobalAddressListIdParameter>]
 [-DomainController <Fqdn>]
 [<CommonParameters>]
```

## DESCRIPTION
The Get-GlobalAddressList cmdlet is mainly used to populate the GAL property pages in the Exchange admin center. This command doesn't provide a filtering capability. If filtering is required, you should use a WHERE clause with the command.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-GlobalAddressList
```

This example returns a summary list of all GALs.

### Example 2
```powershell
Get-GlobalAddressList -Identity GAL_AgencyB | Format-List
```

This example returns detailed information about the GAL named GAL\_AgencyB.

## PARAMETERS

### -Identity
The Identity parameter specifies the global address list that you want to view. You can use any value that uniquely identifies the GAL. For example:

- Name
- Distinguished name (DN)
- GUID

```yaml
Type: GlobalAddressListIdParameter
Parameter Sets: Identity
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -DefaultOnly
The DefaultOnly switch filters the results so only the default GAL is returned. You don't need to use a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: DefaultOnly
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: True
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
