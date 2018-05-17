---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsConferenceDirectory
schema: 2.0.0
---

# Get-CsConferenceDirectory

## SYNOPSIS
Returns information about the conference directories configured for use in your organization.
Conference directories are used to help dial-in conferencing users locate conference information.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Get-CsConferenceDirectory [[-Identity] <XdsGlobalRelativeIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsConferenceDirectory [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
When you create a dial-in conferencing Uniform Resource Identifier (URI), those URIs are assigned unique SIP addresses.
However, SIP addresses are difficult for devices that are not SIP-aware to translate; for example, a public switched telephone network (PSTN) telephone can't translate a SIP address.
Because of that, Skype for Business Server uses conference directories as a way to help these devices locate, and connect to, dial-in conferences.
This is done by creating a SIP conference directory that is associated with each dial-in conferencing URI, and is identified by an integer value rather than a SIP URI.
PSTN telephones and other devices can use these numbers (rather than a SIP URI) when connecting to conferences; the directory number is included in the PSTN conference identification users enter when connecting to a dial-in conference.

The Get-CsConferenceDirectory cmdlet enables you to return information about all the conference directories configured for use in your organization.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsConferenceDirectory
```

The command shown in Example 1 returns information about all the conference directories configured for use in your organization.

### -------------------------- Example 2 --------------------------
```
Get-CsConferenceDirectory -Identity 2
```

Example 2 returns information about the conference directory with the Identity 2.
Because identities must be unique this command will never return more than a single conference directory.

### -------------------------- Example 3 --------------------------
```
Get-CsConferenceDirectory | Where-Object {$_.ServiceID -match "UserServer:atl-cs-001.litwareinc.com"}
```

Example 3 returns all the conference directories housed on the service UserServer:atl-cs-001.litwareinc.com.
To do this, the command first calls the Get-CsConferenceDirectory cmdlet without any parameters in order to return a collection of all the conference directories found in your organization.
This collection is then piped to the Where-Object cmdlet, which selects only those directories where the ServiceID matches the string value "UserServer:atl-cs-001.litwareinc.com".


## PARAMETERS

### -Identity
Numeric identifier (for example, 7) of the conference directory to be returned.
If this parameter is omitted, then the Get-CsConferenceDirectory cmdlet returns information about all the conference directories in use in your organization.

```yaml
Type: XdsGlobalRelativeIdentity
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
Enables you to use wildcards to specify the Identity of the conference directory (or directories) to be retrieved.
Because directory Identities are numeric, this parameter might be of minimal value.
However, this syntax will return all the conference directories that have an Identity that begins with the number 3: -Filter "3*".

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
Retrieves the conference directory data from the local replica of the Central Management store rather than from the Central Management store itself.

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

### Microsoft.Rtc.Management.WritableConfig.Settings.PstnConf.ConferenceDirectories


## NOTES


## RELATED LINKS

[Move-CsConferenceDirectory](Move-CsConferenceDirectory.md)

[New-CsConferenceDirectory](New-CsConferenceDirectory.md)

[Remove-CsConferenceDirectory](Remove-CsConferenceDirectory.md)

