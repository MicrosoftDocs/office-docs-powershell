---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/add-pnpalert
applicable: SharePoint Online, SharePoint 2019
schema: 2.0.0
---

# Add-PnPAlert

## SYNOPSIS
Adds an alert for a user to a list

## SYNTAX 

```powershell
Add-PnPAlert -List <ListPipeBind>
             [-Title <String>]
             [-User <UserPipeBind>]
             [-DeliveryMethod <AlertDeliveryChannel>]
             [-ChangeType <AlertEventType>]
             [-Frequency <AlertFrequency>]
             [-Filter <AlertFilter>]
             [-Time <DateTime>]
             [-Web <WebPipeBind>]
             [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Add-PnPAlert -List "Demo List"
```

Adds a new alert to the "Demo List" for the current user.

### ------------------EXAMPLE 2------------------
```powershell
Add-PnPAlert -Title "Daily summary" -List "Demo List" -Frequency Daily -ChangeType All -Time (Get-Date -Hour 11 -Minute 00 -Second 00)
```

Adds a daily alert for the current user at the given time to the "Demo List". Note: a timezone offset might be applied so please verify on your tenant that the alert indeed got the right time.

### ------------------EXAMPLE 3------------------
```powershell
Add-PnPAlert -Title "Alert for user" -List "Demo List" -User "i:0#.f|membership|Alice@contoso.onmicrosoft.com"
```

Adds a new alert for user "Alice" to the "Demo List". Note: Only site owners and admins are permitted to set alerts for other users.

## PARAMETERS

### -ChangeType
Alert change type

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: AlertEventType
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -DeliveryMethod
Alert delivery method

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: AlertDeliveryChannel
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Filter
Alert filter

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: AlertFilter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Frequency
Alert frequency

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: AlertFrequency
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -List
The ID, Title or Url of the list.

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: ListPipeBind
Parameter Sets: (All)

Required: True
Position: 0
Accept pipeline input: True
```

### -Time
Alert time (if frequency is not immediate)

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: DateTime
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Title
Alert title

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -User
User to create the alert for (User ID, login name or actual User object). Skip this parameter to create an alert for the current user. Note: Only site owners can create alerts for other users.

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

## OUTPUTS

### Microsoft.SharePoint.Client.AlertCreationInformation

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)