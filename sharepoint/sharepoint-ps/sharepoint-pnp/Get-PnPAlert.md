---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnpalert
applicable: SharePoint Online, SharePoint 2019
schema: 2.0.0
---

# Get-PnPAlert

## SYNOPSIS
Returns registered alerts for a user.

## SYNTAX

```powershell
Get-PnPAlert [-List <ListPipeBind>]
             [-User <UserPipeBind>]
             [-Title <String>]
             [-Web <WebPipeBind>]
             [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPAlert
```

Returns all registered alerts for the current user

### ------------------EXAMPLE 2------------------
```powershell
Get-PnPAlert -List "Demo List"
```

Returns all alerts registered on the given list for the current user.

### ------------------EXAMPLE 3------------------
```powershell
Get-PnPAlert -List "Demo List" -User "i:0#.f|membership|Alice@contoso.onmicrosoft.com"
```

Returns all alerts registered on the given list for the specified user.

### ------------------EXAMPLE 4------------------
```powershell
Get-PnPAlert -Title "Demo Alert"
```

Returns all alerts with the given title for the current user. Title comparison is case sensitive.

## PARAMETERS

### -List
The ID, Title or Url of the list.

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: ListPipeBind
Parameter Sets: (All)

Required: False
Position: 0
Accept pipeline input: True
```

### -Title
Retrieve alerts with this title. Title comparison is case sensitive.

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -User
User to retrieve the alerts for (User ID, login name or actual User object). Skip this parameter to retrieve the alerts for the current user. Note: Only site owners can retrieve alerts for other users.

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: UserPipeBind
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: SPOnlineConnection
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Web
This parameter allows you to optionally apply the cmdlet action to a subweb within the current web. In most situations this parameter is not required and you can connect to the subweb using Connect-PnPOnline instead. Specify the GUID, server relative url (i.e. /sites/team1) or web instance of the web to apply the command to. Omit this parameter to use the current web.

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: WebPipeBind
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)
