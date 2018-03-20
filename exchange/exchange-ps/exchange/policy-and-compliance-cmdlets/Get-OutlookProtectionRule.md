---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# Get-OutlookProtectionRule

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-OutlookProtectionRule cmdlet to retrieve Microsoft Outlook protection rules configured in an organization.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-OutlookProtectionRule [[-Identity] <RuleIdParameter>] 
[-DomainController <Fqdn>] [<CommonParameters>]
```

## DESCRIPTION
Outlook protection rules are used to automatically Information Rights Management (IRM)-protect email messages using a Rights Management Services (RMS) template before the message is sent. However, Outlook protection rules don't inspect message content. To IRM-protect messages based on message content, use transport protection rules. For more information, see Outlook protection rules.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```
Get-OutlookProtectionRule
```

This example gets details of all Outlook protection rules configured in the organization.

### Example 2
```
Get-OutlookProtectionRule ProjectContoso | Format-List
```

This example gets all properties of the Outlook protection rule ProjectContoso.

The Identity parameter is positional. When used after the cmdlet name, the parameter value can be specified without providing the parameter label.

## PARAMETERS

### -DomainController
This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter identifies an Outlook protection rule.

```yaml
Type: RuleIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/5a5197f2-a219-4dd2-abe3-d0e8722f414a.aspx)
