---
applicable: Skype for Business Online
schema: 2.0.0
---

# Get-CsTenantPublicProvider

## SYNOPSIS
Returns information indicating whether Skype for Business Online users are allowed to communicate with people who have accounts on the third-party IM and presence providers Windows Live, AOL, and Yahoo.

## SYNTAX

```
Get-CsTenantPublicProvider [-Tenant <Object>] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
Public providers are organizations that provide SIP communication services for the general public.
When you establish a federation relationship with a public provider, you effectively establish federation with any user who has an account hosted by that provider.
For example, if you federate with Windows Live, then your users will be able to exchange instant messages and presence information with anyone who has a Windows Live instant messaging account.

Skype for Business Online gives administrators the option of configuring federation with one or more of the following public IM and presence providers:

Windows Live

AOL

Yahoo!

Administrators can use the Get-CsTenantPublicProvider cmdlet to determine which of those providers (if any) have been enabled for federation.
When you call the Get-CsTenantPublicProvider cmdlet you will get back information similar to this:

PublicProviderSet DomainPicStatus

------------------ ------------------------

True {Microsoft.Rtc.Management.Hosted.DomainPICStatus}

The PublicProviderSet property indicates whether or not federation has been enabled for one or more public provider.
If PublicProviderSet is equal to True then that means federation has been enabled with at least one provider; if PublicProviderSet is equal to False then that means that federation is disabled for all three public providers (Windows Live, AOL, and Yahoo).
To determine the actual status of each provider use this command:

Get-CsTenantPublicProvider -Tenant "bf19b7db-6960-41e5-a139-2aa373474354" | Select-Object -ExpandProperty DomainPICStatus

Note that simply enabling the status of a public provider does not mean that users can exchange instant messages and presence information with users who have accounts on that provider.
In addition to enabling federation with the provider itself, administrators must also set the AllowPublicUsers property of the federation configuration settings to True.
If this property is set to False then communication will not be allowed with any of the public providers, regardless of the public provider configuration settings.

For more information, see the help topic for the Set-CsTenantFederationConfiguration cmdlet.

## EXAMPLES

### -------------------------- Example 1 -------------------------- (Skype for Business Online)
```

```

Example 1 returns detailed information about the status of all the public providers assigned to the tenant bf19b7db-6960-41e5-a139-2aa373474354.
To do this, the command first uses the Get-CsTenantPublicProvider cmdlet to return public provider information for the specified tenant.
That information is then piped to the Select-Object cmdlet, which uses the ExpandProperty parameter to "expand" the value of the DomainPICStatus property.
Expanding a property simply means displaying all the values stored in that property onscreen, and in an easy-to-read format.

Get-CsTenantPublicProvider -Tenant "bf19b7db-6960-41e5-a139-2aa373474354" | Select-Object -ExpandProperty DomainPICStatus

### -------------------------- Example 2 -------------------------- (Skype for Business Online)
```

```

The command shown in Example 23 is a variation of the command shown in Example 1.
In Example 2, however, the public provider information returned by "expanding" the value of the DomainPICStatus property is, in turn, piped to the Where-Object cmdlet.
The Where-Object cmdlet then picks out only those providers where the Status property is set to Enabled.
The net effect is to display only those public providers that are enabled for use.

Get-CsTenantPublicProvider -Tenant "bf19b7db-6960-41e5-a139-2aa373474354" | Select-Object -ExpandProperty DomainPICStatus | Where-Object {$_.Status -eq "Enabled"}

## PARAMETERS

### -Tenant
Globally unique identifier (GUID) of the tenant account whose public provider settings are being returned.
For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return your tenant ID by running this command:

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
None.
The Get-CsTenantPublicProvider cmdlet does not accept pipelined input.

## OUTPUTS

###  
The Get-CsTenantPublicProvider cmdlet returns instances of the Microsoft.Rtc.Management.Hosted.TenantPICStatus object.

## NOTES

## RELATED LINKS

[Get-CsTenantFederationConfiguration]()

[Set-CsTenantPublicProvider]()

[Online Version](http://technet.microsoft.com/EN-US/library/9314e96a-a622-4d2b-b4b8-ee2dc432d774(OCS.15).aspx)

