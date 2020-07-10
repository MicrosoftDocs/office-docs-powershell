---
external help file: Microsoft.Exchange.MediaAndDevices-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/get-mobiledevicestatistics
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
title: Get-MobileDeviceStatistics
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019 || exchonline-ps"
---

# Get-MobileDeviceStatistics

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-MobileDeviceStatistics cmdlet to retrieve the list of mobile devices configured to synchronize with a specified user's mailbox and return a list of statistics about the mobile devices.

> [!NOTE]
> In Exchange Online PowerShell, we recommend that you use the Get-EXOMobileDeviceStatistics cmdlet instead of this cmdlet. For more information, see [Use the Exchange Online PowerShell V2 module](https://docs.microsoft.com/powershell/exchange/exchange-online-powershell-v2).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Identity
```
Get-MobileDeviceStatistics [-Identity] <MobileDeviceIdParameter>
 [-ActiveSync]
 [-DomainController <Fqdn>]
 [-GetMailboxLog]
 [-NotificationEmailAddresses <MultiValuedProperty>]
 [-OWAforDevices]
 [-ShowRecoveryPassword]
 [-RestApi]
 [-UniversalOutlook] [<CommonParameters>]
```

### Mailbox
```
Get-MobileDeviceStatistics -Mailbox <MailboxIdParameter>
 [-ActiveSync]
 [-DomainController <Fqdn>]
 [-GetMailboxLog]
 [-NotificationEmailAddresses <MultiValuedProperty>]
 [-OWAforDevices]
 [-ShowRecoveryPassword]
 [-RestApi]
 [-UniversalOutlook] [<CommonParameters>]
```

## DESCRIPTION
The Get-MobileDeviceStatistics cmdlet returns a list of statistics about each mobile device. Additionally, it allows you to retrieve logs and send those logs to a recipient for troubleshooting purposes.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-MobileDeviceStatistics -Identity TonySmith
```

This example retrieves the statistics for the mobile phone configured to synchronize with the mailbox that belongs to the user Tony Smith.

### Example 2
```powershell
$UserList = Get-CASMailbox -Filter "HasActiveSyncDevicePartnership -eq `$true -and -not DisplayName -like 'CAS_{*'" | Get-Mailbox; $UserList | foreach {Get-MobileDeviceStatistics -Mailbox $_.Identity}
```

This example uses the Get-CASMailbox cmdlet to determine who in the organization has an Exchange ActiveSync mobile device. For each mobile device, the Exchange ActiveSync device statistics are retrieved.

**Note**: For more information about OPath filter syntax, see [Additional OPATH syntax information](https://docs.microsoft.com/powershell/exchange/recipient-filters#additional-opath-syntax-information).

### Example 3
```powershell
Get-MobileDeviceStatistics -Mailbox TonySmith -GetMailboxLog $true -NotificationEmailAddresses "admin@contoso.com"
```

This example retrieves the statistics for the mobile phone configured to synchronize with the mailbox that belongs to the user Tony Smith. It also outputs the Exchange ActiveSync log file and sends it to the System Administrator at admin@contoso.com.

## PARAMETERS

### -Identity
The Identity parameter specifies the mobile device that you want to view. You can use any value that uniquely identifies the mobile device. For example:

- GUID

- DeviceID

You can't use this parameter with the Mailbox parameter.

```yaml
Type: MobileDeviceIdParameter
Parameter Sets: Identity
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Mailbox
The Mailbox parameter filters the results by the user mailbox that's associated with the mobile device. You can use any value that uniquely identifies the mailbox. For example:

- Name

- Alias

- Distinguished name (DN)

- Canonical DN

- \<domain name\>\\\<account name\>

- Email address

- GUID

- LegacyExchangeDN

- SamAccountName

- User ID or user principal name (UPN)

You can't use this parameter with the Identity parameter.

```yaml
Type: MailboxIdParameter
Parameter Sets: Mailbox
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ActiveSync
The ActiveSync switch filters the results by Exchange ActiveSync devices. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
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

### -GetMailboxLog
The GetMailboxLog parameter specifies whether to send the mailbox logs via email to the administrator running the task. If the parameter is set to $true, the command sends the mailbox logs via email to the administrator running the task. The default value of this parameter is $false.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NotificationEmailAddresses
The NotificationEmailAddresses parameter specifies an optional list of comma-separated aliases or email addresses where the mailbox logs are sent. If the GetMailboxLog parameter is set to $false, this parameter is ignored.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OWAforDevices
The OWAforDevices switch filters the results by devices where Outlook on the web for devices is enabled. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RestApi
The RestApi switch filters the results by REST API devices. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UniversalOutlook
The UniversalOutlook switch filters the results by Mail and Calendar devices. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

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
