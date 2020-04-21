---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/remove-pnpalert
applicable: SharePoint Online, SharePoint 2019
schema: 2.0.0
title: Remove-PnPAlert
---

# Remove-PnPAlert

## SYNOPSIS
Removes an alert for a user

## SYNTAX 

```powershell
Remove-PnPAlert -Identity <AlertPipeBind>
                [-User <UserPipeBind>]
                [-Force [<SwitchParameter>]]
                [-Web <WebPipeBind>]
                [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Remove-PnPAlert -Identity 641ac67f-0ce0-4837-874a-743c8f8572a7
```

Removes the alert with the specified ID for the current user

### ------------------EXAMPLE 2------------------
```powershell
Remove-PnPAlert -Identity 641ac67f-0ce0-4837-874a-743c8f8572a7 -User "i:0#.f|membership|Alice@contoso.onmicrosoft.com"
```

Removes the alert with the specified ID for the user specified

## PARAMETERS

### -Force
Specifying the Force parameter will skip the confirmation question.

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Identity
The alert id, or the actual alert object to remove.

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: AlertPipeBind
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

### -User
User to remove the alert for (User ID, login name or actual User object). Skip this parameter to use the current user. Note: Only site owners can remove alerts for other users.

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