---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# Set-OutlookProvider

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Set-OutlookProvider cmdlet to set specific global settings using the msExchOutlookProvider attribute on the msExchAutoDiscoverConfig object in Active Directory.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-OutlookProvider [-Identity] <OutlookProviderIdParameter> [-CertPrincipalName <String>] [-Confirm]
 [-DomainController <Fqdn>] [-Name <String>] [-OutlookProviderFlags <None | ServerExclusiveConnect>]
 [-Server <String>] [-TTL <Int32>] [-WhatIf] [-RequiredClientVersions <String[]>] [<CommonParameters>]
```

## DESCRIPTION
The Set-OutlookProvider cmdlet creates the global settings for the Autodiscover service. It sets the AutoDiscoverConfig object under the Global Settings object in Active Directory and sets the attributes specified in the parameters listed in the Parameters section.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```
Set-OutlookProvider -Identity msExchAutoDiscoverConfig -TTL 2
```

This example changes the duration that the Autodiscover service settings are valid for the Microsoft Outlook provider msExchAutoDiscoverConfig.

## PARAMETERS

### -Identity
The Identity parameter specifies the ADIDParameter value of the MAPI protocol for which you want to set global settings.

```yaml
Type: OutlookProviderIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -CertPrincipalName
The CertPrincipalName parameter specifies the Secure Sockets Layer (SSL) certificate principal name required for connecting to Exchange from an external location.

This parameter is only used for Outlook Anywhere clients.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

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
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies a common name for the Outlook Provider Configuration object. This can be a user-friendly name for identification.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutlookProviderFlags
The OutlookProviderFlags parameter specifies how Outlook clients should connect to the Exchange server. The value can be set to ServerExclusiveConnect, ExternalClientsRequireSSL, InternalClientsRequireSSL or to None to clear the flags. The recommended value is None, which is also the default setting.

```yaml
Type: None | ServerExclusiveConnect
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Server
The Server parameter specifies the Mailbox server to use for Outlook Anywhere clients.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TTL
The TTL parameter specifies the duration (in hours) that the specified settings are valid.

If a value is specified, the settings are rediscovered via the Autodiscover service after the duration specified with this parameter. A value of 0 indicates that no rediscovery is required. The default value is 1 hour.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

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
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequiredClientVersions
The RequiredClientVersions parameter specifies the minimum version of Microsoft Outlook that's allowed to connect to the Exchange server. This information is in the Autodiscover response to the client connection request. Valid input for this parameter is "\<MinimumVersion\>, \<ExpirationDate\>".

\<MinimumVersion\> is the version of Outlook in the format xx.x.xxxx.xxxx. For example, to specify Outlook 2010 Service Pack 2 (SP2), use the value 14.0.7012.1000.

\<ExpirationDate\> is the UTC date-time when connections by older versions of Outlook will be blocked. The UTC date-time is represented in the ISO 8601 date-time format: yyyy-mm-ddThh:mm:ss.fffZ, where yyyy = year, mm = month, dd = day, T indicates the beginning of the time component, hh = hour, mm = minute, ss = second, fff = fractions of a second and Z signifies Zulu, which is another way to denote UTC.

An example of a valid value for this parameter is "14.0.7012.1000, 2014-01-01T12:00:00Z".

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016

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

[Online Version](https://technet.microsoft.com/library/8a3d7245-528d-4501-9fc4-92ce0616cff9.aspx)
