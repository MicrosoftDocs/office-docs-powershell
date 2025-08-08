---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE
author: chrisda
external help file: Microsoft.Exchange.WebClient-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-throttlingpolicy
schema: 2.0.0
title: Get-ThrottlingPolicy
---

# Get-ThrottlingPolicy

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Get-ThrottlingPolicy cmdlet to view the user throttling settings for one or more throttling policies.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-ThrottlingPolicy [[-Identity] <ThrottlingPolicyIdParameter>]
 [-DomainController <Fqdn>]
 [-Diagnostics]
 [-Explicit]
 [-ThrottlingPolicyScope <ThrottlingPolicyScopeType>]
 [<CommonParameters>]
```

## DESCRIPTION
The Get-ThrottlingPolicy cmdlet returns the client throttling settings for one or more throttling policies. If you use the Identity parameter, the cmdlet returns the settings for the identified throttling policy. If you don't use the Identity parameter, the cmdlet returns the settings for all throttling policies.

For more information about how to control the resources consumed by individual users, see [User workload management in Exchange Server](https://learn.microsoft.com/Exchange/server-health/workload-management).

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-ThrottlingPolicy | Format-List
```

This example returns the settings for all throttling policies.

### Example 2
```powershell
Get-ThrottlingPolicy -Identity ThrottlingPolicy2 | Format-List
```

This example displays the parameters and values for throttling policy ThrottlingPolicy2.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The Identity parameter identifies the name of the throttling policy that you want to return settings for.

```yaml
Type: ThrottlingPolicyIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -DomainController

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

The DomainController parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Diagnostics

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The Diagnostics switch specifies whether you want the output to include the diagnostics string. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Explicit

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The Explicit switch specifies whether to return only the policy settings that have been directly assigned using this policy. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ThrottlingPolicyScope

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The ThrottlingPolicyScope parameter specifies the scope of the throttling policy. You can use the following values:

- Global
- Organization
- Regular

For information about each of these policy scopes, see [User workload management in Exchange Server](https://learn.microsoft.com/Exchange/server-health/workload-management).

```yaml
Type: ThrottlingPolicyScopeType
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

### Input types
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
