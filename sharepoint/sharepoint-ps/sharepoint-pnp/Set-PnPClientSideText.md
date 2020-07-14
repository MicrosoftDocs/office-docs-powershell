---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/set-pnpclientsidetext
applicable: SharePoint Online, SharePoint 2019
schema: 2.0.0
title: Set-PnPClientSideText
---

# Set-PnPClientSideText

## SYNOPSIS
Set Client-Side Text Component properties

## SYNTAX 

```powershell
Set-PnPClientSideText -Page <ClientSidePagePipeBind>
                      -InstanceId <GuidPipeBind>
                      -Text <String>
                      [-Web <WebPipeBind>]
                      [-Connection <PnPConnection>]
```

## DESCRIPTION
Sets the rendered text in existing client side text component

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Set-PnPSetClientSideText -Page Home -InstanceId a2875399-d6ff-43a0-96da-be6ae5875f82 -Text "MyText"
```

Sets the text of the client side text component.

## PARAMETERS

### -InstanceId
The instance id of the text component

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: GuidPipeBind
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: True
```

### -Page
The name of the page

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: ClientSidePagePipeBind
Parameter Sets: (All)

Required: True
Position: 0
Accept pipeline input: True
```

### -Text
Text to set

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: String
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: True
```

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: PnPConnection
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