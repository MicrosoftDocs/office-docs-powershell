---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/add-pnpteamstab
applicable: SharePoint Online
schema: 2.0.0
title: Add-PnPTeamsTab
---

# Add-PnPTeamsTab

## SYNOPSIS
Adds a tab to an existing Channel

## SYNTAX 

### 
```powershell
Add-PnPTeamsTab -TeamsAppId <String>
                -EntityId <String>
                -ContentUrl <String>
                -RemoveUrl <String>
                -WebSiteUrl <String>
                -Team <TeamsTeamPipeBind>
                -Channel <TeamsChannelPipeBind>
                -DisplayName <String>
                -Type <TeamTabType>
                [-ByPassPermissionCheck [<SwitchParameter>]]
```

## REQUIRED PERMISSIONS

  * Microsoft Graph API: Group.ReadWrite.All

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Add-PnPTeamsTab -Team "My Team" -Channel "My Channel" -DisplayName "My Channel" -Type WebSite -ContentUrl "https://aka.ms/sppnp
```

Adds a web site tab to the specified channel.

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

### -Channel
Specify the channel id of the team to retrieve.

```yaml
Type: TeamsChannelPipeBind
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: True
```

### -ContentUrl
Specifies the title of the new site collection

```yaml
Type: String
Parameter Sets: (All)

Required: True
Position: 0
Accept pipeline input: False
```

### -DisplayName
Specify the tab type

```yaml
Type: String
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

### -EntityId
Specifies the title of the new site collection

```yaml
Type: String
Parameter Sets: (All)

Required: True
Position: 0
Accept pipeline input: False
```

### -RemoveUrl
Specifies the title of the new site collection

```yaml
Type: String
Parameter Sets: (All)

Required: True
Position: 0
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

### -TeamsAppId
Specifies the title of the new site collection

```yaml
Type: String
Parameter Sets: (All)

Required: True
Position: 0
Accept pipeline input: False
```

### -Type
Specify the tab type

```yaml
Type: TeamTabType
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

### -WebSiteUrl
Specifies the title of the new site collection

```yaml
Type: String
Parameter Sets: (All)

Required: True
Position: 0
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)