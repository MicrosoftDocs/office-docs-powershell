---
external help file: Microsoft.Exchange.RemoteConnections-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/set-edgesyncserviceconfig
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
title: Set-EdgeSyncServiceConfig
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019"
---

# Set-EdgeSyncServiceConfig

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Set-EdgeSyncServiceConfig cmdlet to modify the configuration of edge synchronization service settings that control the general synchronization behavior shared by all EdgeSync services.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-EdgeSyncServiceConfig [-Identity] <EdgeSyncServiceConfigIdParameter>
 [-ConfigurationSyncInterval <EnhancedTimeSpan>]
 [-Confirm]
 [-CookieValidDuration <EnhancedTimeSpan>]
 [-DomainController <Fqdn>]
 [-FailoverDCInterval <EnhancedTimeSpan>]
 [-LockDuration <EnhancedTimeSpan>]
 [-LockRenewalDuration <EnhancedTimeSpan>]
 [-LogEnabled <Boolean>]
 [-LogLevel <EdgeSyncLoggingLevel>]
 [-LogMaxAge <EnhancedTimeSpan>]
 [-LogMaxDirectorySize <Unlimited>]
 [-LogMaxFileSize <Unlimited>]
 [-LogPath <String>]
 [-Name <String>]
 [-OptionDuration <EnhancedTimeSpan>]
 [-RecipientSyncInterval <EnhancedTimeSpan>]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-EdgeSyncServiceConfig "Primary EdgeSync Settings" -LogEnabled $true -LogLevel Medium -LogPath "\\Server01\EdgeSyncLog" -LogMaxFileSize 5MB -LogMaxAge 3
```

This example configures the Microsoft Exchange EdgeSync service settings named Primary EdgeSync Settings with the following values:

EdgeSync logging is enabled and set to the medium detail level.

The log files are stored in the EdgeSyncLog share on the server named Server01.

The maximum individual log file size is 5 megabytes (MB).

The log files are kept for 3 days.

## PARAMETERS

### -Identity
The Identity parameter specifies the name of the Microsoft Exchange EdgeSync service you want to configure.

```yaml
Type: EdgeSyncServiceConfigIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ConfigurationSyncInterval
The ConfigurationSyncInterval parameter specifies how frequently the Microsoft Exchange EdgeSync service synchronizes configuration data. The default value is 3 minutes.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

```yaml
Type: EnhancedTimeSpan
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CookieValidDuration
The CookieValidDuration parameter specifies how long a cookie record is valid. The default value is 21 days.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

```yaml
Type: EnhancedTimeSpan
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
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

### -FailoverDCInterval
The FailoverDCInterval parameter specifies how long EdgeSync waits before failing over to another domain controller if it can't read configuration data from Active Directory. The default value is 5 minutes.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

```yaml
Type: EnhancedTimeSpan
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LockDuration
The LockDuration parameter specifies how long an instance of the Microsoft Exchange EdgeSync service can maintain an exclusive lock on the synchronization rights. While an EdgeSync service maintains an exclusive lock on synchronization rights, no other EdgeSync service can take over synchronization. The default value is 6 minutes.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

```yaml
Type: EnhancedTimeSpan
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LockRenewalDuration
The LockRenewalDuration parameter specifies how long before the expiry of an exclusive lock an EdgeSync service can renew the lock. The default value is 4 minutes.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

```yaml
Type: EnhancedTimeSpan
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LogEnabled
The LogEnabled parameter specifies enables or disables the EdgeSyncLog. Valid input for this parameter is $true or $false. The default value is $true.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LogLevel
The LogLevel parameter specifies the EdgeSync logging level. Valid values are:

- None (This is the default value)

- Low

- Medium

- High

```yaml
Type: EdgeSyncLoggingLevel
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LogMaxAge
The LogMaxAge parameter specifies the maximum duration in days to keep the EdgeSyncLog files. Log files older than the specified value can be overwritten. The default value is 30 days.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

```yaml
Type: EnhancedTimeSpan
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LogMaxDirectorySize
The LogMaxDirectorySize specifies the maximum amount of disk space the EdgeSyncLog directory can use. The default value is 250 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The value of the LogMaxFileSize parameter must be less than or equal to the value of the LogMaxDirectorySize parameter. The valid input range for either parameter is from 1 through 9223372036854775807 bytes. If you enter a value of unlimited, no size limit is imposed on the EdgeSyncLog directory.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LogMaxFileSize
The LogMaxFileSize parameter specifies the maximum log file size for the EdgeSyncLog files. The default value is 10 MB.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The value of the LogMaxFileSize parameter must be less than or equal to the value of the LogMaxDirectorySize parameter. The valid input range for either parameter is from 1 through 9223372036854775807 bytes. If you enter a value of unlimited, no size limit is imposed on the EdgeSyncLog files.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LogPath
The LogPath parameter specifies the disk location to store the EdgeSyncLog files. The default value is TransportRoles\\Logs\\EdgeSync\\.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies a unique name for the EdgeSync service configuration.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OptionDuration
The OptionDuration parameter specifies how long an instance of the Microsoft Exchange EdgeSync service can maintain an optional lock on the synchronization rights. While an EdgeSync service maintains an optional lock on synchronization rights, another EdgeSync service can take over synchronization after the optional lock has expired if it's initiated using the Start-EdgeSynchronization command. The default value is 30 minutes.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

```yaml
Type: EnhancedTimeSpan
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientSyncInterval
The RecipientSyncInterval parameter specifies how frequently the Microsoft Exchange EdgeSync service synchronizes recipient data from the global catalog. The default value is 5 minutes.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

```yaml
Type: EnhancedTimeSpan
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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
