---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/get-policytipconfig
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
title: Get-PolicyTipConfig
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019 || exchonline-ps"
---

# Get-PolicyTipConfig

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-PolicyTipConfig cmdlet to view the data loss prevention (DLP) Policy Tips in your organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Parameters
```
Get-PolicyTipConfig [-Action <PolicyTipMessageConfigAction>] [-Locale <CultureInfo>] [-Original]
 [-DomainController <Fqdn>] [<CommonParameters>]
```

### Identity
```
Get-PolicyTipConfig [[-Identity] <PolicyTipConfigIdParameter>]
 [-DomainController <Fqdn>] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-PolicyTipConfig -Action NotifyOnly
```

This example returns a summary list of the custom Policy Tips in all languages that have the action value NotifyOnly.

### Example 2
```powershell
Get-PolicyTipConfig -Original -Locale fr
```

This example returns a summary list of all built-in French Policy Tips.

### Example 3
```powershell
Get-PolicyTipConfig en\RejectOverride | Format-List
```

This example returns details about the custom English Policy Tip for the action value RejectOverride.

## PARAMETERS

### -Action
The Action parameter filters the Policy Tips by action. Valid values for this parameter are:

- NotifyOnly

- RejectOverride

- Reject

You can't use the value Url with the Action parameter. Instead, use command: Get-PolicyTipConfig Url.

You can't use the Action parameter with the Identity parameter.

```yaml
Type: PolicyTipMessageConfigAction
Parameter Sets: Parameters
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the custom Policy Tip you want to view. You can use any value that uniquely identifies the custom Policy Tip. For example:

- \<Locale\>\\\<Action\>: Locale is a supported locale code. For example, en for English or fr for French. For more information about supported locales, see [Supported languages for NDRs](https://docs.microsoft.com/Exchange/mail-flow/non-delivery-reports-and-bounce-messages/ndr-procedures#supported-languages-for-ndrs). Action is one of the following Policy Tip actions: NotifyOnly, RejectOverride or Reject.

- The value Url

- GUID

- Distinguished name (DN)

You can't use the Identity parameter with the Action, Locale or Original parameters.

```yaml
Type: PolicyTipConfigIdParameter
Parameter Sets: Identity
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Locale
The Locale parameter specifies a locale-specific version of the Policy Tip.

Valid values for this parameter are supported locale codes. For example, en for English or fr for French. For more information about supported locales, see [Supported languages for NDRs](https://docs.microsoft.com/Exchange/mail-flow/non-delivery-reports-and-bounce-messages/ndr-procedures#supported-languages-for-ndrs).

You can't use the Locale parameter with the Identity parameter.

```yaml
Type: CultureInfo
Parameter Sets: Parameters
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Original
The Original switch includes built-in Policy Tips in the results. You don't specify a value with the Original switch. You can't use the Original switch with the Identity parameter.

```yaml
Type: SwitchParameter
Parameter Sets: Parameters
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
