---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
online version:
schema: 2.0.0
---

# Remove-TeamChannelUser

> [!IMPORTANT]
> Modules in the PS INT gallery for Microsoft Teams run on the /beta version in Microsoft Graph and are subject to change. Int modules can be install from here <https://www.poshtestgallery.com/packages/MicrosoftTeams>.  

## SYNOPSIS
Note: the command will return immediately, but the Teams application will not reflect the update immediately, please refresh the members page to see the update.

To turn an existing Owner into an Member, specify role parameter as Owner.

Note: last owner cannot be removed from the private channel.

## SYNTAX

```
Remove-TeamChannelUser -GroupId <String> -DisplayName <String> -User <String> [-Role <String>]
 [<CommonParameters>]
```

## DESCRIPTION

## EXAMPLES

### Example 1
```
Remove-TeamChannelUser -GroupId 31f1ff6c-d48c-4f8a-b2e1-abca7fd399df -DisplayName "Engineering" -User dmx@example.com
```

## PARAMETERS

### -GroupId
GroupId of the team

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -DisplayName
Display name of the private channel

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -User
User's UPN (user principal name - e.g.
johndoe@example.com)

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Role
Use this to demote a user from owner to member of the team

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
