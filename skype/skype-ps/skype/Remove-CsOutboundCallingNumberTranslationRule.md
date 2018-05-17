---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Remove-CsOutboundCallingNumberTranslationRule
schema: 2.0.0
---

# Remove-CsOutboundCallingNumberTranslationRule

## SYNOPSIS
Removes an existing outbound calling number translation rule.
An outbound calling number translation rule converts the E.164 phone numbers used by Skype for Business Server to a format that can be used by trunking peers that do not support E.164 numbers.
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

```
Remove-CsOutboundCallingNumberTranslationRule [-Identity] <XdsIdentity> [-Confirm] [-Force] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Outbound calling number translation rules convert the E.164 phone numbers used by Skype for Business to a format that can be used by trunking peers that do not support E.164 numbers; when you create a translation rule you supply a regular expression representing the outbound E.164 number (the Pattern) as well as a regular expression representing the converted number (the Translation).

Outbound calling number translation rules must be bound to a collection of trunk configuration settings; when you create a new translation rule you must specify both the Identity of the trunking configuration settings and a name for the new rule (for example, site:Redmond/RedmondTranslationRule).
Note that the trunking configuration settings do not necessarily have to exist at the time you create a new rule.
For example, suppose you create the rule site:Redmond/RedmondTranslationRule but no trunk configuration settings have been created for the Redmond site.
If the Redmond site is a valid site, trunk configuration settings will automatically be created for the site and the new translation rule will be assigned to that collection of settings.
However, your command will fail if the Redmond site does not exist.

Skype for Business Server Control Panel: To remove an outbound calling number translation rule using the Skype for Business Server Control Panel, click Voice Routing and then click Trunk Configuration.
Double-click the appropriate item in the Name column and then, in the Edit Trunk Configuration dialog box, scroll down to the section labeled Calling number translation roles.
Select the rule to be deleted and then click Remove.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-CsOutboundCallingNumberTranslationRule -Identity "site:Redmond/SevenDigit"
```

The command shown in Example 1 removes the outbound calling number translation rule that has the Identity site:Redmond/SevenDigit.


### -------------------------- Example 2 --------------------------
```
Remove-CsOutboundCallingNumberTranslationRule -Identity "site:Redmond"
```

In Example 2, all the outbound calling number translation rules configured for the Redmond site are removed.
To do this, the command calls the `Remove-CsOutboundCallingNumberTranslationRule` cmdlet along with the Identity parameter; the parameter value "site:Redmond" ensures that all the translation rules configured for the Redmond site will be removed.


### -------------------------- Example 3 --------------------------
```
Get-CsOutboundCallingNumberTranslationRule | Where-Object {$_.Pattern -eq '^\+1425(\d{7})$'} | Remove-CsOutboundCallingNumberTranslationRule
```

Example 3 deletes all the outbound calling number translation rules that use the Pattern "^\+1425(\d{7})$".
To do this, the command first uses the `Get-CsOutboundCallingNumberTranslationRule` cmdlet to return a collection of all the translation rules used in the organization.
This collection is then piped to the `Where-Object` cmdlet, which picks out only those rules where the Pattern property is equal to "^\+1425(\d{7})$".
That filtered collection is then piped to the `Remove-CsOutboundCallingNumberTranslationRule` cmdlet, which deletes each rule in the collection.


## PARAMETERS

### -Identity
The unique identifier of the outbound translation rule you want to remove.
The Identity consists of the scope followed by a unique name within each scope.
For example:

`-Identity "site:Redmond/OutboundRule1"`

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might occur when running the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Describes what would happen if you executed the command without actually executing the command

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
The `Remove-CsOutboundCallingNumberTranslationRule` cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Settings.TrunkConfiguration.CallingNumberTranslationRule#Decorated object.

## OUTPUTS

###  
None.
Instead, the `Remove-CsOutboundCallingNumberTranslationRule` cmdlet deletes existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.TrunkConfiguration.CallingNumberTranslationRule#Decorated object.

## NOTES

## RELATED LINKS

[Get-CsOutboundCallingNumberTranslationRule](Get-CsOutboundCallingNumberTranslationRule.md)

[New-CsOutboundCallingNumberTranslationRule](New-CsOutboundCallingNumberTranslationRule.md)

[Set-CsOutboundCallingNumberTranslationRule](Set-CsOutboundCallingNumberTranslationRule.md)

