---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsMediaConfiguration
schema: 2.0.0
---

# Get-CsMediaConfiguration

## SYNOPSIS
Returns information regarding media settings, including the supported level of encryption, whether Siren can be used as a voice codec by the Mediation Server in its interactions with Skype for Business Server clients, and the maximum allowed video resolution.
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
This cmdlet retrieves one or more collections of settings that define media interactions.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsMediaConfiguration
```

Example 1 returns all the media configurations in use in your organization; this is done simply by invoking the Get-CsMediaConfiguration cmdlet without any additional parameters.

### -------------------------- Example 2 --------------------------
```
Get-CsMediaConfiguration -Identity site:Redmond1
```

Example 2 returns only the media configuration that has the Identity site:Redmond1.
Because identities must be unique, specifying an Identity ensures that you will never retrieve more than one item.

### -------------------------- Example 3 --------------------------
```
Get-CsMediaConfiguration -Filter site:*
```

In Example 3, the Filter parameter is used to return all the media configurations at the site scope.
The wildcard string site:* ensures that Windows PowerShell will return only those media configurations that have identities beginning with the string value site:.

### -------------------------- Example 4 --------------------------
```
Get-CsMediaConfiguration | Where-Object {$_.EncryptionLevel -eq "SupportEncryption"}
```

In this example, the Get-CsMediaConfiguration cmdlet and the Where-Object cmdlet are used to return all the media configurations that support (but do not require) encryption.
To do this, the command first uses the Get-CsMediaConfiguration cmdlet to retrieve all the media configurations in use in your organization.
This information is then piped to the Where-Object cmdlet, which applies a filter that restricts the returned data to those configurations where the EncryptionLevel property is equal to (-eq) SupportEncryption.

### -------------------------- Example 5 --------------------------
```
Get-CsMediaConfiguration -Filter *:*med*
```

This example retrieves all media configurations defined for sites and services with names that contain the string "med".
For example, this command will retrieve media configuration settings defined for the site medford1, the site TwoMedfordPlace, and the service MediationServer:redmond.litwareinc.com.


## PARAMETERS

### -Identity
The unique identifier of the media configuration you want to retrieve.
This identifier specifies the scope at which this configuration is applied (global, site, or service).

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### None


## OUTPUTS

### Microsoft.Rtc.Management.WritableConfig.Settings.Media.MediaSettings


## NOTES


## RELATED LINKS

[New-CsMediaConfiguration](New-CsMediaConfiguration.md)

[Remove-CsMediaConfiguration](Remove-CsMediaConfiguration.md)

[Set-CsMediaConfiguration](Set-CsMediaConfiguration.md)

