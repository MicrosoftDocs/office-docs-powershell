---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/set-pnpmicrosoft365group
applicable: SharePoint Online
schema: 2.0.0
title: Set-PnPMicrosoft365Group
---

# Set-PnPMicrosoft365Group

## SYNOPSIS

**Required Permissions**

  * Microsoft Graph API: Group.ReadWrite.All

Sets Microsoft 365 Group properties

## SYNTAX 

```powershell
Set-PnPMicrosoft365Group -Identity <Microsoft365GroupPipeBind>
                         [-DisplayName <String>]
                         [-Description <String>]
                         [-Owners <String[]>]
                         [-Members <String[]>]
                         [-IsPrivate [<SwitchParameter>]]
                         [-GroupLogoPath <String>]
                         [-CreateTeam [<SwitchParameter>]]
                         [-ByPassPermissionCheck [<SwitchParameter>]]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Set-PnPMicrosoft365Group -Identity $group -DisplayName "My Displayname"
```

Sets the display name of the group where $group is a Group entity

### ------------------EXAMPLE 2------------------
```powershell
Set-PnPMicrosoft365Group -Identity $groupId -Descriptions "My Description" -DisplayName "My DisplayName"
```

Sets the display name and description of a group based upon its ID

### ------------------EXAMPLE 3------------------
```powershell
Set-PnPMicrosoft365Group -Identity $group -GroupLogoPath ".\MyLogo.png"
```

Sets a specific Microsoft 365 Group logo

### ------------------EXAMPLE 4------------------
```powershell
Set-PnPMicrosoft365Group -Identity $group -IsPrivate:$false
```

Sets a group to be Public if previously Private

### ------------------EXAMPLE 5------------------
```powershell
Set-PnPMicrosoft365Group -Identity $group -Owners demo@contoso.com
```

Sets demo@contoso.com as owner of the group

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

### -CreateTeam
Creates a Microsoft Teams team associated with created group

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Description
The Description of the group to set

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -DisplayName
The DisplayName of the group to set

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -GroupLogoPath
The path to the logo file of to set. Logo must be at least 48 pixels wide and may be at most 4 MB in size. Requires Site.ReadWrite.All permissions.

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Identity
The Identity of the Microsoft 365 Group

```yaml
Type: Microsoft365GroupPipeBind
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: True
```

### -IsPrivate
Makes the group private when selected

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Members
The array UPN values of members to set to the group. Note: Will replace members.

```yaml
Type: String[]
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Owners
The array UPN values of owners to set to the group. Note: Will replace owners.

```yaml
Type: String[]
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)[Documentation](https://docs.microsoft.com/graph/api/group-update)