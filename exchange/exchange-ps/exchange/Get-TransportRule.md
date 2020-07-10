---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/get-transportrule
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
title: Get-TransportRule
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019 || exchonline-ps || eop-ps"
---

# Get-TransportRule

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-TransportRule cmdlet to view transport rules (mail flow rules) in your organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-TransportRule [[-Identity] <RuleIdParameter>] [-DomainController <Fqdn>]
 [-State <RuleState>] [-DlpPolicy <String>]
 [-Filter <String>] [-ResultSize <Unlimited>] [<CommonParameters>]
```

## DESCRIPTION
On Mailbox servers, this cmdlet returns all rules in the Exchange organization that are stored in Active Directory. On an Edge Transport server, this cmdlet only returns rules that are configured on the local server.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-TransportRule
```

This example returns a summary list of all rules in your organization.

### Example 2
```powershell
Get-TransportRule "Ethical Wall - Sales and Brokerage Departments" | Format-List
```

This example returns detailed information for the rule named "Ethical Wall - Sales and Brokerage Departments".

For more information about pipelining, see [About Pipelines](https://docs.microsoft.com/powershell/module/microsoft.powershell.core/about/about_pipelines). For more information about how to work with the output of a command, see [Working with command output](https://docs.microsoft.com/exchange/working-with-command-output-exchange-2013-help).

### Example 3
```powershell
Get-TransportRule -DlpPolicy "PII (U.S.)"
```

This example returns a summary list of the rules that enforce the DLP policy named PII (U.S.) in your organization.

### Example 4
```powershell
Get-TransportRule | Where {$_.DlpPolicy -ne $null}
```

This example returns a summary list of all rules that enforce DLP policies in your organization.

## PARAMETERS

### -DomainController
This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

The DomainController parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data.

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

### -Identity
The Identity parameter specifies the rule that you want to view. You can use any value that uniquely identifies the rule. For example:

- Name

- Distinguished name (DN)

- GUID

```yaml
Type: RuleIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -State
The State parameter specifies filters the results by enabled or disabled rules. Valid values are:

- Enabled: Only enabled rules are returned in the results.

- Disabled: Only disabled rules are returned in the results.

If you don't use this parameter, the command returns all rules, both enabled and disabled.

```yaml
Type: RuleState
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DlpPolicy
The DlpPolicy parameter filters the results by the named of the specified data loss prevention (DLP) policy. If the value contains spaces, enclose the value in quotation marks (").

DLP policies in your organization allow you to prevent unintentional disclosure of sensitive information. Each DLP policy is enforced using a set of transport rules.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
The Filter parameter filters the results by using an OPath. This parameter searches the Description property, which includes the conditions, exceptions, actions and the associated values of a transport rule.

This parameter uses the syntax `"Description -like '*Text*'"`. For example, `"Description -like *192.168.1.1*'"`.

For detailed information about OPath filters in Exchange, see [Additional OPATH syntax information](https://docs.microsoft.com/powershell/exchange/recipient-filters#additional-opath-syntax-information).

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize
The ResultSize parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use unlimited for the value of this parameter. The default value is 1000.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

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
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
