---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/new-pnpmicrosoft365group
applicable: SharePoint Online
schema: 2.0.0
title: New-PnPMicrosoft365Group
---

# New-PnPMicrosoft365Group

## SYNOPSIS
Creates a new Microsoft 365 Group

## SYNTAX 

```powershell
New-PnPMicrosoft365Group -DisplayName <String>
                         -Description <String>
                         -MailNickname <String>
                         [-Owners <String[]>]
                         [-Members <String[]>]
                         [-IsPrivate [<SwitchParameter>]]
                         [-GroupLogoPath <String>]
                         [-CreateTeam [<SwitchParameter>]]
                         [-Force [<SwitchParameter>]]
                         [-ByPassPermissionCheck [<SwitchParameter>]]
```

## REQUIRED PERMISSIONS

  * Microsoft Graph API : One of Directory.ReadWrite.All, Group.Create, Group.ReadWrite.All

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
New-PnPMicrosoft365Group -DisplayName $displayName -Description $description -MailNickname $nickname
```

Creates a public Microsoft 365 Group with all the required properties

### ------------------EXAMPLE 2------------------
```powershell
New-PnPMicrosoft365Group -DisplayName $displayName -Description $description -MailNickname $nickname -Owners $arrayOfOwners -Members $arrayOfMembers
```

Creates a public Microsoft 365 Group with all the required properties, and with a custom list of Owners and a custom list of Members

### ------------------EXAMPLE 3------------------
```powershell
New-PnPMicrosoft365Group -DisplayName $displayName -Description $description -MailNickname $nickname -IsPrivate
```

Creates a private Microsoft 365 Group with all the required properties

### ------------------EXAMPLE 4------------------
```powershell
New-PnPMicrosoft365Group -DisplayName $displayName -Description $description -MailNickname $nickname -Owners $arrayOfOwners -Members $arrayOfMembers -IsPrivate
```

Creates a private Microsoft 365 Group with all the required properties, and with a custom list of Owners and a custom list of Members

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
The Description of the Microsoft 365 Group

```yaml
Type: String
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

### -DisplayName
The Display Name of the Microsoft 365 Group

```yaml
Type: String
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

### -Force
Specifying the Force parameter will skip the confirmation question.

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -GroupLogoPath
The path to the logo file of to set

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
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

### -MailNickname
The Mail Nickname of the Microsoft 365 Group. Cannot contain spaces.

```yaml
Type: String
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

### -Members
The array UPN values of the group's members

```yaml
Type: String[]
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Owners
The array UPN values of the group's owners

```yaml
Type: String[]
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)[Documentation](https://docs.microsoft.com/graph/api/group-post-groups)