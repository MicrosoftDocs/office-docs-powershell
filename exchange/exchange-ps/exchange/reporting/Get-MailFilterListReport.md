---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
applicable: Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection
title: Get-MailFilterListReport
schema: 2.0.0
monikerRange: "exchonline-ps || o365scc-ps || eop-ps"
---

# Get-MailFilterListReport

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-MailFilterListReport cmdlet to obtain values for various parameters that can be supplied to other reporting cmdlets.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-MailFilterListReport [-Domain <MultiValuedProperty>] [-Expression <Expression>] [-ProbeTag <String>]
 [-SelectionTarget <MultiValuedProperty>] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-MailFilterListReport -SelectionTarget TransportRule
```

This example uses the Get-MailFilterListReport cmdlet to return information about transport rules.

## PARAMETERS

### -Domain
The Domain parameter filters the results by an accepted domain in the cloud-based organization. You can specify multiple domain values separated by commas, or the value All.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Expression
This parameter is reserved for internal Microsoft use.

```yaml
Type: Expression
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProbeTag
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SelectionTarget
The SelectionTarget parameter filters the report information by object type. Valid values for this parameter are: Actions, DlpPolicy, DlpRule, Domain, EventTypes, FindOnPremConnector or TransportRule.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Office 365 Security & Compliance Center, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/e295ac9a-3ecf-405a-b81c-c77e3067126a.aspx)
