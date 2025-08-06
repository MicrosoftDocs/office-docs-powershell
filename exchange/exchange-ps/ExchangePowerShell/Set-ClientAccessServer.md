---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
author: chrisda
external help file: Microsoft.Exchange.WebClient-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/set-clientaccessserver
schema: 2.0.0
title: Set-ClientAccessServer
---

# Set-ClientAccessServer

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Set-ClientAccessServer cmdlet to modify settings that are associated with the Client Access server role.

**Note**: In Exchange 2013 or later, use the Set-ClientAccessService cmdlet instead. If you have scripts that use Set-ClientAccessServer, update them to use Set-ClientAccessService.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### AlternateServiceAccount
```
Set-ClientAccessServer [-Identity] <ClientAccessServerIdParameter>
 [-AlternateServiceAccountCredential <PSCredential[]>]
 [-CleanUpInvalidAlternateServiceAccountCredentials]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-IrmLogEnabled <Boolean>]
 [-IrmLogMaxAge <EnhancedTimeSpan>]
 [-IrmLogMaxDirectorySize <Unlimited>]
 [-IrmLogMaxFileSize <ByteQuantifiedSize>]
 [-IrmLogPath <LocalLongFullPath>]
 [-IsOutOfService <Boolean>]
 [-RemoveAlternateServiceAccountCredentials]
 [-WhatIf]
 [<CommonParameters>]
```

### Identity
```
Set-ClientAccessServer [-Identity] <ClientAccessServerIdParameter>
 [-Array <ClientAccessArrayIdParameter>]
 [-AutoDiscoverServiceInternalUri <Uri>]
 [-AutoDiscoverSiteScope <MultiValuedProperty>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-IrmLogEnabled <Boolean>]
 [-IrmLogMaxAge <EnhancedTimeSpan>]
 [-IrmLogMaxDirectorySize <Unlimited>]
 [-IrmLogMaxFileSize <ByteQuantifiedSize>]
 [-IrmLogPath <LocalLongFullPath>]
 [-IsOutOfService <Boolean>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-ClientAccessServer -Identity "MBX-01" -AutoDiscoverServiceInternalUri "https://mbx01.contoso.com/autodiscover/autodiscover.xml" -AutoDiscoverSiteScope "Mail"
```

This example configures the internal Autodiscover URL for the Active Directory site named Mail in the client access services on the server named MBX-01.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Identity parameter specifies the server that you want to modify. You can use any value that uniquely identifies the server. For example:

- Name
- Distinguished name (DN)
- FQDN
- GUID

```yaml
Type: ClientAccessServerIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AlternateServiceAccountCredential

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The AlternateServiceAccountCredential parameter specifies an alternative service account username and password that's typically used for Kerberos authentication in Exchange Server 2010 coexistence environments. You can specify multiple values separated by commas.

A value for this parameter requires the Get-Credential cmdlet. To pause this command and receive a prompt for credentials, use the value `(Get-Credential)`. Or, before you run this command, store the credentials in a variable (for example, `$cred = Get-Credential`) and then use the variable name (`$cred`) for this parameter. For more information, see [Get-Credential](https://learn.microsoft.com/powershell/module/microsoft.powershell.security/get-credential).

```yaml
Type: PSCredential[]
Parameter Sets: AlternateServiceAccount
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Array

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is reserved for internal Microsoft use.

```yaml
Type: ClientAccessArrayIdParameter
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoDiscoverServiceInternalUri

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The AutoDiscoverServiceInternalUri parameter specifies the internal URL of the Autodiscover service.

```yaml
Type: Uri
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoDiscoverSiteScope

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The AutoDiscoverSiteScope parameter specifies the Active Directory site that the Autodiscover service is authoritative for. Clients that connect to the Autodiscover service by using the internal URL need to exist in the specified site.

To see the available Active Directory sites, use the Get-ADSite cmdlet.

To specify multiple values, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

```yaml
Type: MultiValuedProperty
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CleanUpInvalidAlternateServiceAccountCredentials

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The CleanUpInvalidAlternateServiceAccountCredentials switch specifies whether to remove a previously configured alternate service account that's no longer valid. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: AlternateServiceAccount
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IrmLogEnabled

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The IrmLogEnabled parameter specifies whether logging is enabled for Information Rights Management (IRM). Valid values are $true or $false. The default value is $true.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IrmLogMaxAge

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The IrmLogMaxAge parameter specifies the max age for IRM logs. Logs older than the specified value are deleted.

To specify a value, enter it as a time span: dd.hh:mm:ss where d = days, h = hours, m = minutes, and s = seconds.

For example, to specify a 15-hour interval, enter 15:00:00. The default value is 30 days (30.00:00:00).

```yaml
Type: EnhancedTimeSpan
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IrmLogMaxDirectorySize

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The IrmLogMaxDirectorySize parameter specifies the maximum directory size for IRM logs. When the maximum directory size is reached, the server deletes the old log files first.

A valid value is a number up to 909.5 terabytes (999999999999999 bytes) or the value unlimited. The default value is 250 megabytes (262144000 bytes).

When you enter a value, qualify the value with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)
- TB (terabytes)

Unqualified values are typically treated as bytes, but small values might be rounded up to the nearest kilobyte.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IrmLogMaxFileSize

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The IrmLogMaxFileSize parameter specifies the maximum size of the IRM log. This value can't be larger than the IrmLogMaxDirectorySize parameter value.

A valid value is a number up to 4 gigabytes (4294967296 bytes). The default value is 10 megabytes (10485760 bytes).

When you enter a value, qualify the value with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)

Unqualified values are typically treated as bytes, but small values might be rounded up to the nearest kilobyte.

The value of this parameter must be less than or equal to the value of the ReceiveProtocolLogMaxDirectorySize parameter.

```yaml
Type: ByteQuantifiedSize
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IrmLogPath

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The IrmLogPath parameter specifies the location of the IRM log files. The default location is %ExchangeInstallPath%Logging\\IRMLogs.

If you set the value of this parameter to $null, you effectively disable IRM logging. However, if the value of the IrmLogEnabled parameter is $true, Exchange adds errors to the Application event log. The preferred way to disable IRM logging is to set the IrmLogEnabled parameter to $false.

```yaml
Type: LocalLongFullPath
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsOutOfService

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

This parameter is reserved for internal Microsoft use.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveAlternateServiceAccountCredentials

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The RemoveAlternateServiceAccountCredentials switch specifies whether to remove a previously distributed alternate service account. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: AlternateServiceAccount
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

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
