---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# Get-ActiveSyncDeviceStatistics

## SYNOPSIS
!!! Exchange Server 2010

Use the Get-ActiveSyncDeviceStatistics cmdlet to do the following:

!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-ActiveSyncDeviceStatistics cmdlet to retrieve the list of mobile devices configured to synchronize with a specified user's mailbox and return a list of statistics about the mobile devices.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

The Get-ActiveSyncDeviceStatistics cmdlet will be removed in a future version of Exchange. Use the Get-MobileDeviceStatistics cmdlet instead. If you have any scripts that use the Get-ActiveSyncDeviceStatistics cmdlet, update them to use the Get-MobileDeviceStatistics cmdlet.

## SYNTAX

### Set1
```
Get-ActiveSyncDeviceStatistics [-Identity] <ActiveSyncDeviceIdParameter> [-DomainController <Fqdn>]
 [-GetMailboxLog] [-NotificationEmailAddresses <MultiValuedProperty>] [-ShowRecoveryPassword]
 [<CommonParameters>]
```

### Set2
```
Get-ActiveSyncDeviceStatistics -Mailbox <MailboxIdParameter> [-DomainController <Fqdn>] [-GetMailboxLog]
 [-NotificationEmailAddresses <MultiValuedProperty>] [-ShowRecoveryPassword] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

The Get-ActiveSyncDeviceStatistics cmdlet returns a list of statistics about each mobile phone. Additionally, it allows you to retrieve logs and send those logs to a recipient for troubleshooting purposes.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Exchange ActiveSync user settings" entry in the Client Access Permissions topic.

!!! Exchange Server 2013

The Get-ActiveSyncDeviceStatistics cmdlet returns a list of statistics about each mobile device. Additionally, it allows you to retrieve logs and send those logs to a recipient for troubleshooting purposes.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Exchange ActiveSync user settings" entry in the Clients and mobile devices permissions topic.

!!! Exchange Server 2016, Exchange Online

The Get-ActiveSyncDeviceStatistics cmdlet returns a list of statistics about each mobile device. Additionally, it allows you to retrieve logs and send those logs to a recipient for troubleshooting purposes.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Get-ActiveSyncDeviceStatistics -Identity TonySmith
```

This example retrieves the statistics for the mobile phone configured to synchronize with the mailbox that belongs to the user Tony Smith.

### Example 1 -------------------------- (Exchange Server 2013)
```
Get-ActiveSyncDeviceStatistics -Identity TonySmith
```

This example retrieves the statistics for the mobile phone configured to synchronize with the mailbox that belongs to the user Tony Smith.

### Example 1 -------------------------- (Exchange Server 2016)
```
Get-ActiveSyncDeviceStatistics -Identity TonySmith
```

This example retrieves the statistics for the mobile phone configured to synchronize with the mailbox that belongs to the user Tony Smith.

### Example 1 -------------------------- (Exchange Online)
```
Get-ActiveSyncDeviceStatistics -Identity TonySmith
```

This example retrieves the statistics for the mobile phone configured to synchronize with the mailbox that belongs to the user Tony Smith.

### Example 2 -------------------------- (Exchange Server 2010)
```
$UserList = Get-CASMailbox -Filter hasactivesyncdevicepartnership -eq $true -and -not displayname -like "CAS_{*"} | Get-Mailbox; $UserList | foreach {Get-ActiveSyncDeviceStatistics -Mailbox $_.Identity}
```

This example uses the Get-CASMailbox cmdlet to determine who in the organization has a Microsoft Exchange ActiveSync device. For each device, the Exchange ActiveSync device statistics are retrieved.

### Example 2 -------------------------- (Exchange Server 2013)
```
$UserList = Get-CASMailbox -Filter {hasactivesyncdevicepartnership -eq $true -and -not displayname -like "CAS_{*"} | Get-Mailbox; $UserList | foreach {Get-ActiveSyncDeviceStatistics -Mailbox $_}
```

This example uses the Get-CASMailbox cmdlet to determine who in the organization has a Microsoft Exchange ActiveSync mobile device. For each mobile device, the Exchange ActiveSync device statistics are retrieved.

### Example 2 -------------------------- (Exchange Server 2016)
```
$UserList = Get-CASMailbox -Filter {HasActiveSyncDevicePartnership -eq $true -and -not DisplayName -like "CAS_{*"} | Get-Mailbox $UserList | foreach {Get-ActiveSyncDeviceStatistics -Mailbox $_}
```

This example uses the Get-CASMailbox cmdlet to determine who in the organization has an Exchange ActiveSync mobile device. For each mobile device, the Exchange ActiveSync device statistics are retrieved.

### Example 2 -------------------------- (Exchange Online)
```
$UserList = Get-CASMailbox -Filter {HasActiveSyncDevicePartnership -eq $true -and -not DisplayName -like "CAS_{*"} | Get-Mailbox $UserList | foreach {Get-ActiveSyncDeviceStatistics -Mailbox $_}
```

This example uses the Get-CASMailbox cmdlet to determine who in the organization has an Exchange ActiveSync mobile device. For each mobile device, the Exchange ActiveSync device statistics are retrieved.

### Example 3 -------------------------- (Exchange Server 2010)
```
Get-ActiveSyncDeviceStatistics -Mailbox TonySmith -GetMailboxLog $true -NotificationEmailAddresses "admin@contoso.com"
```

This example retrieves the statistics for the mobile phone configured to synchronize with the mailbox that belongs to the user Tony Smith. It also outputs the Exchange ActiveSync log file and sends it to the System Administrator at admin@contoso.com.

### Example 3 -------------------------- (Exchange Server 2013)
```
Get-ActiveSyncDeviceStatistics -Mailbox TonySmith -GetMailboxLog $true -NotificationEmailAddresses "admin@contoso.com"
```

This example retrieves the statistics for the mobile phone configured to synchronize with the mailbox that belongs to the user Tony Smith. It also outputs the Exchange ActiveSync log file and sends it to the System Administrator at admin@contoso.com.

### Example 3 -------------------------- (Exchange Server 2016)
```
Get-ActiveSyncDeviceStatistics -Mailbox TonySmith -GetMailboxLog $true -NotificationEmailAddresses "admin@contoso.com"
```

This example retrieves the statistics for the mobile phone configured to synchronize with the mailbox that belongs to the user Tony Smith. It also outputs the Exchange ActiveSync log file and sends it to the System Administrator at admin@contoso.com.

### Example 3 -------------------------- (Exchange Online)
```
Get-ActiveSyncDeviceStatistics -Mailbox TonySmith -GetMailboxLog $true -NotificationEmailAddresses "admin@contoso.com"
```

This example retrieves the statistics for the mobile phone configured to synchronize with the mailbox that belongs to the user Tony Smith. It also outputs the Exchange ActiveSync log file and sends it to the System Administrator at admin@contoso.com.

## PARAMETERS

### -Identity
The Identity parameter specifies the user's device ID. If the Mailbox parameter is specified, the Identity parameter is disabled.

```yaml
Type: ActiveSyncDeviceIdParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Mailbox
The Mailbox parameter specifies the user mailbox for which you want to retrieve the mobile phone statistics.

```yaml
Type: MailboxIdParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -DomainController
!!! Exchange Server 2010

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.



```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GetMailboxLog
!!! Exchange Server 2010

The GetMailboxLog parameter specifies whether to send the mailbox logs via e-mail to the administrator running the task. If the parameter is set to $true, the command sends the mailbox logs via e-mail to the administrator running the task. The default value of this parameter is $false.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

The GetMailboxLog parameter specifies whether to send the mailbox logs via email to the administrator running the task. If the parameter is set to $true, the command sends the mailbox logs via email to the administrator running the task. The default value of this parameter is $false.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NotificationEmailAddresses
!!! Exchange Server 2010

The NotificationEmailAddresses parameter specifies an optional list of comma-separated aliases or e-mail addresses where the mailbox logs are sent. If the GetMailboxLog parameter is set to $false, this parameter is ignored.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

The NotificationEmailAddresses parameter specifies an optional list of comma-separated aliases or email addresses where the mailbox logs are sent. If the GetMailboxLog parameter is set to $false, this parameter is ignored.



```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShowRecoveryPassword
The ShowRecoveryPassword parameter specifies whether to return the recovery password for the mobile phone as one of the displayed statistics. If this parameter is set to $true, the command returns the recovery password for the mobile phone as one of the displayed statistics.

```yaml
Type: SwitchParameter
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

[Online Version](https://technet.microsoft.com/library/2b6160ef-ab82-49e7-a5be-fd7cae92dabb.aspx)

