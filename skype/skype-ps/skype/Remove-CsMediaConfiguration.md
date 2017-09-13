---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsMediaConfiguration

## SYNOPSIS
Removes the specified collection of media configuration settings.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Remove-CsMediaConfiguration [-Identity] <XdsIdentity> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet removes a collection of media settings.
These settings relate to audio and video calls between client endpoints.

This cmdlet can also be used to remove the global media settings.
In that case, however, the settings will not actually be removed; instead, they will simply be reset to their default values.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-CsMediaConfiguration -Identity site:Redmond1
```

In Example 1, the `Remove-CsMediaConfiguration` cmdlet is used to delete the media configuration collection with the Identity site:Redmond1.
When media settings are removed from the site scope, that site will automatically begin to use the global media settings.


### -------------------------- Example 2 --------------------------
```
Get-CsMediaConfiguration | Where-Object {$_.EncryptionLevel -eq "RequireEncryption"} | Remove-CsMediaConfiguration
```

In Example 2, three cmdlets--the `Get-CsMediaConfiguration` cmdlet, the `Where-Object` cmdlet and the `Remove-CsMediaConfiguration` cmdlet--are used to remove all the media configuration collections where encryption is required of all parties involved in the conversation.
To do this, the `Get-CsMediaConfiguration` cmdlet is first used to return all the media configuration collections in the organization.
That information is then piped to the `Where-Object` cmdlet, which applies a filter that restricts the pipeline data to those collections where the EncryptionLevel property is equal to (-eq) RequireEncryption.
Finally, that filtered set of data is passed to the `Remove-CsMediaConfiguration` cmdlet, which deletes each item in the set.


### -------------------------- Example 3 --------------------------
```
Get-CsMediaConfiguration -Filter service:* | Remove-CsMediaConfiguration
```

In this example all media configurations defined at the service scope (meaning the configuration applies to a specific service) are removed.
This is accomplished by first calling the `Get-CsMediaConfiguration` cmdlet using the Filter service:*.
This filter retrieves all media configuration collections with an Identity starting with service, which means all collections at the service scope.
That set of collections is then piped the `Remove-CsMediaConfiguration` cmdlet, which removes them all.


## PARAMETERS

### -Identity
The unique identifier of the media configuration settings you want to remove.
This identifier specifies the scope at which this configuration is applied (global, site, or service).

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Force
Suppresses any confirmation prompts that would otherwise be displayed before making changes.

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

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
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
Microsoft.Rtc.Management.WritableConfig.Settings.Media.MediaSettings object.
Accepts pipelined input of media configuration objects.

## OUTPUTS

###  
Removes an object of type Microsoft.Rtc.Management.WritableConfig.Settings.Media.MediaSettings.

## NOTES

## RELATED LINKS

[New-CsMediaConfiguration]()

[Set-CsMediaConfiguration]()

[Get-CsMediaConfiguration]()
