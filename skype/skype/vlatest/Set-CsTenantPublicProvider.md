---
external help file: 
applicable: Skype for Business Online
schema: 2.0.0
---

# Set-CsTenantPublicProvider

## SYNOPSIS
Enables and disables communication with the third-party IM and presence providers Windows Live, AOL, and Yahoo.
When enabled, Skype for Business Online users will be able to exchange IM and presence information with users who have accounts on the specified public provider.

## SYNTAX

```
Set-CsTenantPublicProvider [-Confirm] [-Provider <Object>] [-Tenant <Object>] [-WhatIf] [-AsJob]
 [<CommonParameters>]
```

## DESCRIPTION
Public providers are organizations that provide SIP communication services for the general public.
When you establish a federation relationship with a public provider, you effectively establish federation with any user who has an account hosted by that provider.
For example, if you federate with Windows Live, then your users will be able to exchange instant messages and presence information with anyone who has a Windows Live instant messaging account.

Skype for Business Online gives administrators the option of configuring federation with one or more of the following public IM and presence providers:

Windows Live

AOL

Yahoo!

The Set-CsTenantPublicProvider cmdlet can be used to enable or disable federation with any of these public providers.
When using this cmdlet, keep in mind that each time you run the Set-CsTenantPublicProvider cmdlet you must specify all of the providers that should be enabled.
For example, suppose all three providers are disabled and you run this command:

Set-CsTenantPublicProvider -Tenant "bf19b7db-6960-41e5-a139-2aa373474354" -Provider "WindowsLive"

As you might expect, that will enable Windows Live, and will leave AOL and Yahoo disabled.

Now, suppose you next run this command:

Set-CsTenantPublicProvider -Tenant "bf19b7db-6960-41e5-a139-2aa373474354" -Provider "AOL"

That command will enable AOL.
However, it will also disable Windows Live: that's because Windows Live was not specified as part of the parameter value supplied to the Provider parameter.
If you want to enable AOL and keep Windows Live enabled as well, then you must specify both AOL and Windows Live when calling Set-CsTenantPublicProvider:

Set-CsTenantPublicProvider -Tenant "bf19b7db-6960-41e5-a139-2aa373474354" -Provider "AOL","WindowsLive"

To disable federation for all three providers, set the Provider property to an empty string (""):

Set-CsTenantPublicProvider -Tenant "bf19b7db-6960-41e5-a139-2aa373474354" -Provider ""

Note that simply enabling the status of a public provider does not mean that users can exchange instant messages and presence information with users who have accounts on that provider.
In addition to enabling federation with the provider itself, administrators must also set the AllowPublicUsers property of the federation configuration settings to True.
If this property is set to False then communication will not be allowed with any of the public providers, regardless of the public provider configuration settings.

## EXAMPLES

### -------------------------- Example 1 -------------------------- (Skype for Business Online)
```

```

The command shown in Example 1 enables federation with Windows Live for the tenant with the tenant ID bf19b7db-6960-41e5-a139-2aa373474354.
Because Windows Live is the only provider specified, both the AOL and Yahoo providers will be disabled after the command executes.

Set-CsTenantPublicProvider -Tenant "bf19b7db-6960-41e5-a139-2aa373474354" -Provider "WindowsLive"

### -------------------------- Example 2 -------------------------- (Skype for Business Online)
```

```

In Example 2, two public providers are enabled: Windows Live and AOL.
That means that only the Yahoo public provider will be disabled for the specified tenant.

Set-CsTenantPublicProvider -Tenant "bf19b7db-6960-41e5-a139-2aa373474354" -Provider "WindowsLive","AOL"

### -------------------------- Example 3 -------------------------- (Skype for Business Online)
```

```

Example 3 shows how you can disable all the public providers for a given tenant.
This is done by setting the Provider property to an empty string ("").

Set-CsTenantPublicProvider -Tenant "bf19b7db-6960-41e5-a139-2aa373474354" -Provider ""

## PARAMETERS

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Provider
Indicates the public provider (or providers) that users will be allowed to communicate with.
Valid values are:

* AOL
* WindowsLive
* Yahoo

Note that, when configuring public providers, any provider included in the Provider parameter value will be enabled for use, while any provider not included in the parameter value will be disabled.
For example, this syntax enables only Yahoo, while disabling Windows Live and AOL:

-Provider "Yahoo"

You can enable multiple providers by separating the provider names by using commas:

-Provider "AOL","WindowsLive"

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Globally unique identifier (GUID) of the tenant account whose public provider settings are being modified.
For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return your tenant ID by running this command

Get-CsTenant | Select-Object DisplayName, TenantID

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AsJob
{{Fill AsJob Description}}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
The Set-CsTenantPublicProvider cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.Hosted.TenantPICStatus object.

## OUTPUTS

###  
None.
Instead, the Set-CsTenantPublicProvider cmdlet modifies existing instances of the Microsoft.Rtc.Management.Hosted.TenantPICStatus object.

## NOTES

## RELATED LINKS

[Get-CsTenantFederationConfiguration]()

[Get-CsTenantPublicProvider]()

[Online Version](http://technet.microsoft.com/EN-US/library/feffaad1-72da-478b-8db0-ecc283f1ca1d(OCS.15).aspx)

