---
external help file: Microsoft.Exchange.MediaAndDevices-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/get-activesyncdevicestatistics
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
title: Get-ActiveSyncDeviceStatistics
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Get-ActiveSyncDeviceStatistics

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-ActiveSyncDeviceStatistics cmdlet to retrieve the list of mobile devices configured to synchronize with a specified user's mailbox and return a list of statistics about the mobile devices.

**Note**: This cmdlet works best in Exchange 2010. In later versions of Exchange or Exchange Online, use the Get-MobileDeviceStatistics cmdlet instead. If you have scripts that use Get-ActiveSyncDeviceStatistics, update them to use Get-MobileDeviceStatistics.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Identity
```
Get-ActiveSyncDeviceStatistics [-Identity] <ActiveSyncDeviceIdParameter>
 [-DomainController <Fqdn>]
 [-GetMailboxLog]
 [-NotificationEmailAddresses <MultiValuedProperty>]
 [-ShowRecoveryPassword]
 [<CommonParameters>]
```

### Mailbox
```
Get-ActiveSyncDeviceStatistics -Mailbox <MailboxIdParameter>
 [-DomainController <Fqdn>]
 [-GetMailboxLog]
 [-NotificationEmailAddresses <MultiValuedProperty>]
 [-ShowRecoveryPassword]
 [<CommonParameters>]
```

## DESCRIPTION
The Get-ActiveSyncDeviceStatistics cmdlet returns a list of statistics about each mobile device. Additionally, it allows you to retrieve logs and send those logs to a recipient for troubleshooting purposes.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-ActiveSyncDeviceStatistics -Mailbox TonySmith
```

This example retrieves the statistics for the mobile phone configured to synchronize with the mailbox that belongs to the user Tony Smith.

### Example 2
```powershell
$UserList = Get-CASMailbox -Filter "HasActiveSyncDevicePartnership -eq `$true -and -not DisplayName -like 'CAS_{*'"

Get-Mailbox $UserList | foreach {Get-ActiveSyncDeviceStatistics -Mailbox $_}
```

This example uses the Get-CASMailbox cmdlet to determine who in the organization has an Exchange ActiveSync mobile device. For each mobile device, the Exchange ActiveSync device statistics are retrieved.

**Note**: For more information about OPATH filter syntax, see [Additional OPATH syntax information](https://learn.microsoft.com/powershell/exchange/recipient-filters#additional-opath-syntax-information).

### Example 3
```powershell
Get-ActiveSyncDeviceStatistics -Mailbox TonySmith -GetMailboxLog -NotificationEmailAddresses "admin@contoso.com"
```

This example retrieves the statistics for the mobile phone configured to synchronize with the mailbox that belongs to the user Tony Smith. It also outputs the Exchange ActiveSync log file and sends it to the System Administrator at admin@contoso.com.

## PARAMETERS

### -Identity
The Identity parameter specifies the user's device ID. If the Mailbox parameter is specified, the Identity parameter is disabled.

```yaml
Type: ActiveSyncDeviceIdParameter
Parameter Sets: Identity
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Mailbox
The Mailbox parameter specifies the user mailbox for which you want to retrieve the mobile phone statistics. You can use any value that uniquely identifies the mailbox. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Domain\\Username
- Email address
- GUID
- LegacyExchangeDN
- SamAccountName
- User ID or user principal name (UPN)

```yaml
Type: MailboxIdParameter
Parameter Sets: Mailbox
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: True
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

### -GetMailboxLog
The GetMailboxLog switch specifies whether to send the mobile device statistics to the email addresses that are specified by the NotificationEmailAddresses parameter. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NotificationEmailAddresses
The NotificationEmailAddresses parameter specifies a comma-separated list of email addresses to receive the mobile device statistics when you use the GetMailboxLog switch.

This parameter is meaningful only if you also use the GetMailboxLog switch in the same command.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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
