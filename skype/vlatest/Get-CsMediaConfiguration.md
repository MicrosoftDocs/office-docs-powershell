---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsMediaConfiguration

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Returns information regarding media settings, including the supported level of encryption, whether Siren can be used as a voice codec by the Mediation Server, and the maximum allowed video resolution.

Below Content Applies To: Lync Server 2013

Returns information regarding media settings, including the supported level of encryption, whether Siren can be used as a voice codec by the Mediation Server in its interactions with Lync Server clients, and the maximum allowed video resolution.
This cmdlet was introduced in Lync Server 2010.

Below Content Applies To: Skype for Business Server 2015

Returns information regarding media settings, including the supported level of encryption, whether Siren can be used as a voice codec by the Mediation Server in its interactions with Skype for Business Server 2015 clients, and the maximum allowed video resolution.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Get-CsMediaConfiguration [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsMediaConfiguration [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010, Lync Server 2013

This cmdlet retrieves one or more collections of settings that define media interactions.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsMediaConfiguration cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsMediaConfiguration"}

Below Content Applies To: Skype for Business Server 2015

This cmdlet retrieves one or more collections of settings that define media interactions.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Get-CsMediaConfiguration
```

Example 1 returns all the media configurations in use in your organization; this is done simply by invoking the cmdlet Get-CsMediaConfiguration without any additional parameters.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

Example 1 returns all the media configurations in use in your organization; this is done simply by invoking the cmdlet Get-CsMediaConfiguration without any additional parameters.

Get-CsMediaConfiguration

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 returns all the media configurations in use in your organization; this is done simply by invoking the Get-CsMediaConfiguration cmdlet without any additional parameters.

Get-CsMediaConfiguration

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Get-CsMediaConfiguration -Identity site:Redmond1
```

The preceding example returns only the media configuration that has the Identity site:Redmond1.
Because identities must be unique, specifying an Identity ensures that you will never retrieve more than one item.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 returns only the media configuration that has the Identity site:Redmond1.
Because identities must be unique, specifying an Identity ensures that you will never retrieve more than one item.

Get-CsMediaConfiguration -Identity site:Redmond1

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 returns only the media configuration that has the Identity site:Redmond1.
Because identities must be unique, specifying an Identity ensures that you will never retrieve more than one item.

Get-CsMediaConfiguration -Identity site:Redmond1

### -------------------------- Example 3 -------------------------- (Lync Server 2010)
```
Get-CsMediaConfiguration -Filter site:*
```

In Example 3, the Filter parameter is used to return all the media configurations at the site scope.
The wildcard string site:* ensures that Windows PowerShell will return only those media configurations that have identities beginning with the string value site:.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

In Example 3, the Filter parameter is used to return all the media configurations at the site scope.
The wildcard string site:* ensures that Windows PowerShell will return only those media configurations that have identities beginning with the string value site:.

Get-CsMediaConfiguration -Filter site:*

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

In Example 3, the Filter parameter is used to return all the media configurations at the site scope.
The wildcard string site:* ensures that Windows PowerShell will return only those media configurations that have identities beginning with the string value site:.

Get-CsMediaConfiguration -Filter site:*

### -------------------------- Example 4 -------------------------- (Lync Server 2010)
```
Get-CsMediaConfiguration | Where-Object {$_.EncryptionLevel -eq "SupportEncryption"}
```

In this example, Get-CsMediaConfiguration and Where-Object are used to return all the media configurations that support (but do not require) encryption.
To do this, the command first uses Get-CsMediaConfiguration to retrieve all the media configurations in use in your organization.
This information is then piped to the Where-Object cmdlet, which applies a filter that restricts the returned data to those configurations where the EncryptionLevel property is equal to (-eq) SupportEncryption.

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

In this example, Get-CsMediaConfiguration and Where-Object are used to return all the media configurations that support (but do not require) encryption.
To do this, the command first uses Get-CsMediaConfiguration to retrieve all the media configurations in use in your organization.
This information is then piped to the Where-Object cmdlet, which applies a filter that restricts the returned data to those configurations where the EncryptionLevel property is equal to (-eq) SupportEncryption.

Get-CsMediaConfiguration | Where-Object {$_.EncryptionLevel -eq "SupportEncryption"}

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

In this example, the Get-CsMediaConfiguration cmdlet and the Where-Object cmdlet are used to return all the media configurations that support (but do not require) encryption.
To do this, the command first uses the Get-CsMediaConfiguration cmdlet to retrieve all the media configurations in use in your organization.
This information is then piped to the Where-Object cmdlet, which applies a filter that restricts the returned data to those configurations where the EncryptionLevel property is equal to (-eq) SupportEncryption.

Get-CsMediaConfiguration | Where-Object {$_.EncryptionLevel -eq "SupportEncryption"}

### -------------------------- Example 5 -------------------------- (Lync Server 2010)
```
Get-CsMediaConfiguration -Filter *:*med*
```

This example retrieves all media configurations defined for sites and services with names that contain the string "med".
For example, this command will retrieve media configuration settings defined for the site medford1, the site TwoMedfordPlace, and the service MediationServer:redmond.litwareinc.com.

### -------------------------- EXAMPLE 5 -------------------------- (Lync Server 2013)
```

```

This example retrieves all media configurations defined for sites and services with names that contain the string "med".
For example, this command will retrieve media configuration settings defined for the site medford1, the site TwoMedfordPlace, and the service MediationServer:redmond.litwareinc.com.

Get-CsMediaConfiguration -Filter *:*med*

### -------------------------- EXAMPLE 5 -------------------------- (Skype for Business Server 2015)
```

```

This example retrieves all media configurations defined for sites and services with names that contain the string "med".
For example, this command will retrieve media configuration settings defined for the site medford1, the site TwoMedfordPlace, and the service MediationServer:redmond.litwareinc.com.

Get-CsMediaConfiguration -Filter *:*med*

## PARAMETERS

### -Identity
The unique identifier of the media configuration you want to retrieve.
This identifier specifies the scope at which this configuration is applied (global, site, or service).

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
This parameter filters the results of the Get operation based on the wildcard value passed to this parameter.

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the media configuration information from the local replica of the Central Management store, rather than from the Central Management store itself.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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

## OUTPUTS

###  
Get-CsMediaConfiguration returns instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Media.MediaSettings object.

###  
The Get-CsMediaConfiguration cmdlet returns instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Media.MediaSettings object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/071c1733-07c3-4075-8745-367634e37941(OCS.14).aspx)

[New-CsMediaConfiguration]()

[Remove-CsMediaConfiguration]()

[Set-CsMediaConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/071c1733-07c3-4075-8745-367634e37941(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/071c1733-07c3-4075-8745-367634e37941(OCS.16).aspx)

