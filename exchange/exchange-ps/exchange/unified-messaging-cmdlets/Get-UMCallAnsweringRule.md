---
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# Get-UMCallAnsweringRule

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-UMCallAnsweringRule cmdlet to view the properties of a Unified Messaging (UM) call answering rule that has been created within a UM-enabled mailbox.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-UMCallAnsweringRule [[-Identity] <UMCallAnsweringRuleIdParameter>] [-DomainController <Fqdn>]
 [-Mailbox <MailboxIdParameter>] [<CommonParameters>]
```

## DESCRIPTION
The Get-UMCallAnsweringRule cmdlet enables you to view the properties of a call answering rule that has been created in a UM-enabled user's mailbox. It allows you to retrieve the properties for a single call answering rule or a list of call answering rules in a UM-enabled user's mailbox.

After this task is completed, the cmdlet returns the parameters and the values specified.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```
Get-UMCallAnsweringRule -Identity MyUMCallAnsweringRule -Mailbox tonysmith | Format-List
```

This example returns a formatted list of call answering rules in a user's UM-enabled mailbox.

### Example 2
```
Get-UMCallAnsweringRule -Identity MyUMCallAnsweringRule
```

This example displays the properties of the call answering rule MyUMCallAnsweringRule.

## PARAMETERS

### -DomainController
This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the identifier for a call answering rule being viewed.

```yaml
Type: UMCallAnsweringRuleIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Mailbox
The Mailbox parameter specifies the UM-enabled mailbox that contains the UM call answering rule. The default is the user's mailbox running the cmdlet.

```yaml
Type: MailboxIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

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

[Online Version](https://technet.microsoft.com/library/a6e08530-97b8-4a27-b84f-d362f274ce37.aspx)
