---
external help file: Microsoft.Exchange.MediaAndDevices-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
title: Get-ActiveSyncMailboxPolicy
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019 || exchonline-ps"
---

# Get-ActiveSyncMailboxPolicy

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-ActiveSyncMailboxPolicy cmdlet to retrieve the Mobile Device mailbox policy settings for a specific Mobile Device mailbox policy.

Note: In Exchange 2013 or later, use the Get-MobileDeviceMailboxPolicy cmdlet instead. If you have scripts that use Get-ActiveSyncMailboxPolicy, update them to use Get-MobileDeviceMailboxPolicy.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-ActiveSyncMailboxPolicy [[-Identity] <MailboxPolicyIdParameter>] 
[-DomainController <Fqdn>] [<CommonParameters>]
```

## DESCRIPTION
A Mobile Device mailbox policy is a group of settings that specifies how mobile devices enabled for Microsoft Exchange ActiveSync connect to the computer running Exchange. Exchange supports multiple Mobile Device mailbox policies. The Get-ActiveSyncMailboxPolicy cmdlet displays all the policy settings for the specified policy. These settings include password settings, file access settings and attachment settings.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-ActiveSyncMailboxPolicy -Identity "SalesPolicy"
```

This example returns the policy settings for the Mobile Device mailbox policy named SalesPolicy.

### -------------------------- Example 2 --------------------------
```
Get-ActiveSyncMailboxPolicy -Identity "Default"
```

This example returns the policy settings for the Mobile Device mailbox policy named Default.

### -------------------------- Example 3 --------------------------
```
Get-ActiveSyncMailboxPolicy -Identity "Management"
```

This example returns the policy settings for the Mobile Device mailbox policy named Management.

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
The Identity parameter specifies the policy name.

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

[Online Version](https://technet.microsoft.com/library/deffb9df-6326-44dc-862b-424085d14d00.aspx)
