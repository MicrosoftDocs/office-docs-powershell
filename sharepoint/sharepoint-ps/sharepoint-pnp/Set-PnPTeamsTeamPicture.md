---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/set-pnpteamsteampicture
applicable: SharePoint Online
schema: 2.0.0
title: Set-PnPTeamsTeamPicture
---

# Set-PnPTeamsTeamPicture

## SYNOPSIS

**Required Permissions**

  * Microsoft Graph API: Group.ReadWrite.All

Sets the picture of an existing team.

## SYNTAX 

```powershell
Set-PnPTeamsTeamPicture -Team <TeamsTeamPipeBind>
                        -Path <String>
                        [-ByPassPermissionCheck [<SwitchParameter>]]
```

## DESCRIPTION
Notice that this cmdlet will immediately return but it can take a few hours before the changes are reflected in Microsoft Teams.

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Set-PnPTeamsTeamPicture -Team "MyTeam" -Path "c:\myimage.jpg"
```

Updates the channel called 'MyChannel' to have the display name set to 'My Channel'

## PARAMETERS

### -ByPassPermissionCheck
Allows the check for required permissions in the access token to be bypassed when set to $true

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Path
The path to the image file.

```yaml
Type: String
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

### -Team
Specify the group id, mailNickname or display name of the team to use.

```yaml
Type: TeamsTeamPipeBind
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: True
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)