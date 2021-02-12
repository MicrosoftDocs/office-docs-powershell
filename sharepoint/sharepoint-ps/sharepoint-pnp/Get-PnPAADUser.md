---
Module Name: PnP.PowerShell
schema: 2.0.0
applicable: SharePoint Online
online version: https://pnp.github.io/powershell/cmdlets/Get-PnPAADUser.html
external help file: PnP.PowerShell.dll-Help.xml
title: Get-PnPAADUser
---
  
# Get-PnPAADUser

## SYNOPSIS

> [!TIP]
> We encourage you to make improvements to this documentation. Please navigate to https://github.com/pnp/powershell/blob/dev/documentation/Get-PnPAADUser.md to change this file.


**Required Permissions**

  * Microsoft Graph API : One of Directory.Read.All, Directory.ReadWrite.All, User.Read.All, User.ReadWrite.All

Retrieves users from Azure Active Directory. By default the following properties will be loaded: BusinessPhones, DisplayName, GivenName, JobTitle, Mail, MobilePhone, OfficeLocation, PreferredLanguage, Surname, UserPrincipalName, Id, AccountEnabled 

## SYNTAX

### Return a list (Default)
```powershell
Get-PnPAADUser [-Filter <String>] [-OrderBy <String>] [-Select <String[]>] [-StartIndex <Int32>] [-EndIndex<Int32>] [<CommonParameters>]
```

### Return by specific ID
```powershell
Get-PnPAADUser [-Identity <String>] [-Select <String[]>] [<CommonParameters>]
```

### Return the delta
```powershell
Get-PnPAADUser [-Filter <String>] [-OrderBy <String>] [-Select <String[]>] [-Delta] [-DeltaToken <String>] [-StartIndex <Int32>] [-EndIndex<Int32>] [<CommonParameters>]
```

## DESCRIPTION

## EXAMPLES

### EXAMPLE 1
```powershell
Get-PnPAADUser
```

Retrieves the first 1000 users from Azure Active Directory

### EXAMPLE 2
```powershell
Get-PnPAADUser -EndIndex $null
```

Retrieves all users from Azure Active Directory

### EXAMPLE 3
```powershell
Get-PnPAADUser -Identity 328c7693-5524-44ac-a946-73e02d6b0f98
```

Retrieves the user from Azure Active Directory with the id 328c7693-5524-44ac-a946-73e02d6b0f98

### EXAMPLE 4
```powershell
Get-PnPAADUser -Identity john@contoso.com
```

Retrieves the user from Azure Active Directory with the user principal name john@contoso.com

### EXAMPLE 5
```powershell
Get-PnPAADUser -Identity john@contoso.com -Select "DisplayName","extension_3721d05137db455ad81aa442e3c2d4f9_extensionAttribute1"
```

Retrieves only the DisplayName and extensionAttribute1 properties of the user from Azure Active Directory which has the user principal name john@contoso.com

### EXAMPLE 6
```powershell
Get-PnPAADUser -Filter "accountEnabled eq false"
```

Retrieves all the disabled users from Azure Active Directory

### EXAMPLE 7
```powershell
Get-PnPAADUser -Filter "startswith(DisplayName, 'John')" -OrderBy "DisplayName"
```

Retrieves all the users from Azure Active Directory of which their DisplayName starts with 'John' and sort the results by the DisplayName

### EXAMPLE 8
```powershell
Get-PnPAADUser -Delta
```

Retrieves all the users from Azure Active Directory and include a delta DeltaToken which can be used by providing -DeltaToken <token> to query for changes to users in Active Directory since this run

### EXAMPLE 9
```powershell
Get-PnPAADUser -Delta -DeltaToken abcdef
```

Retrieves all the users from Azure Active Directory which have had changes since the provided DeltaToken was given out

### EXAMPLE 10
```powershell
Get-PnPAADUser -StartIndex 10 -EndIndex 20
```

Retrieves the 10th through the 20th user from Azure Active Directory

## PARAMETERS

### -Delta
Retrieves all users and provides a SkipToken delta token to allow to query for changes since this run when querying again by adding -DeltaToken to the command

```yaml
Type: SwitchParameter
Parameter Sets: Return the delta

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DeltaToken
The change token provided during the previous run with -Delta to query for the changes to user objects made in Azure Active Directory since that run

```yaml
Type: String
Parameter Sets: Return the delta

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
Includes a filter to the retrieval of the users. Use OData instructions to construct the filter, i.e. "startswith(DisplayName, 'John')".

```yaml
Type: String
Parameter Sets: Return a list, Return the delta

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Returns the user with the provided user id

```yaml
Type: String
Parameter Sets: Return by specific ID

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OrderBy
Includes a custom sorting instruction to the retrieval of the users. Use OData syntax to construct the orderby, i.e. "DisplayName desc".

```yaml
Type: String
Parameter Sets: Return a list, Return the delta

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Select
Allows providing an array with the property names of specific properties to return. If not provided, the default properties will be returned.

```yaml
Type: String[]
Parameter Sets: (All)

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartIndex
Allows defining the first result to return. Useful for i.e. paging.

```yaml
Type: Int32
Parameter Sets: (All)

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EndIndex
Allows defining the last result to return. Useful for i.e. pagina. If omitted, it will use 999. If set to $null, it will return all users from Azure Active Directory.

```yaml
Type: Int32
Parameter Sets: (All)

Required: False
Position: Named
Default value: 999
Accept pipeline input: False
Accept wildcard characters: False
```

## RELATED LINKS

[Microsoft 365 Patterns and Practices](https://aka.ms/m365pnp)


