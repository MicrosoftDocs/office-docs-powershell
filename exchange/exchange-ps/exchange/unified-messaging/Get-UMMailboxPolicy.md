---
external help file: Microsoft.Exchange.MediaAndDevices-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
title: Get-UMMailboxPolicy
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchonline-ps"
---

# Get-UMMailboxPolicy

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-UMMailboxPolicy cmdlet to display the properties and values of a Unified Messaging (UM) mailbox policy.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-UMMailboxPolicy [[-Identity] <MailboxPolicyIdParameter>] [-DomainController <Fqdn>]
 [-UMDialPlan <UMDialPlanIdParameter>] [<CommonParameters>]
```

## DESCRIPTION
The Get-UMMailboxPolicy cmdlet retrieves the configuration properties and values for a UM mailbox policy or returns a list of UM mailbox policies.

After this task is completed, if the Identity parameter is supplied, the properties and values for the specified UM mailbox policy object are returned. If no parameter is specified at the command prompt, all UM mailbox policies in the Active Directory forest are returned.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-UMMailboxPolicy | Format-List
```

This example returns a formatted list of all UM mailbox policies in the Active Directory forest.

### -------------------------- Example 2 --------------------------
```
Get-UMMailboxPolicy -Identity MyUMMailboxPolicy
```

This example returns the properties and values for the UM mailbox policy MyUMMailboxPolicy.

### -------------------------- Example 3 --------------------------
```
Get-UMMailboxPolicy -UMDialPlan MyUMDialPlan
```

This examples displays all the UM mailbox policies associated with the UM dial plan MyUMDialPlan.

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
The Identity parameter specifies the identifier for the UM mailbox policy being viewed. This is the directory object ID for the UM mailbox policy.

```yaml
Type: MailboxPolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -UMDialPlan
The UMDialPlan parameter specifies that all UM mailbox policies associated with the UM dial plan are displayed.

```yaml
Type: UMDialPlanIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
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
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/f3a09cda-c1b9-4d7c-b1a5-eefc3603ebe7.aspx)
