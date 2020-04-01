---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/add-pnpapplicationcustomizer
applicable: SharePoint Online, SharePoint 2019
schema: 2.0.0
---

# Add-PnPApplicationCustomizer

## SYNOPSIS
Adds a SharePoint Framework client side extension application customizer

## SYNTAX 

```powershell
Add-PnPApplicationCustomizer -ClientSideComponentId <GuidPipeBind>
                             [-Title <String>]
                             [-Description <String>]
                             [-Sequence <Int>]
                             [-Scope <CustomActionScope>]
                             [-ClientSideComponentProperties <String>]
                             [-ClientSideHostProperties <String>]
                             [-Web <WebPipeBind>]
                             [-Connection <SPOnlineConnection>]
```

## DESCRIPTION
Adds a SharePoint Framework client side extension application customizer by registering a user custom action to a web or sitecollection

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Add-PnPApplicationCustomizer -Title "CollabFooter" -ClientSideComponentId c0ab3b94-8609-40cf-861e-2a1759170b43 -ClientSideComponentProperties "{`"sourceTermSet`":`"PnP-CollabFooter-SharedLinks`",`"personalItemsStorageProperty`":`"PnP-CollabFooter-MyLinks`"}
```

Adds a new application customizer to the current web. This requires that a SharePoint Framework solution has been deployed containing the application customizer specified in its manifest. Be sure to run Install-PnPApp before trying this cmdlet on a site.

## PARAMETERS

### -ClientSideComponentId
The Client Side Component Id of the SharePoint Framework client side extension application customizer found in the manifest

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: GuidPipeBind
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

### -ClientSideComponentProperties
The Client Side Component Properties of the application customizer. Specify values as a json string : "{Property1 : 'Value1', Property2: 'Value2'}"

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -ClientSideHostProperties
The Client Side Host Properties of the application customizer. Specify values as a json string : "{'preAllocatedApplicationCustomizerTopHeight': '50', 'preAllocatedApplicationCustomizerBottomHeight': '50'}"

Only applicable to: SharePoint Online

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Description
The description of the application customizer

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Scope
The scope of the CustomAction to add to. Either Web or Site; defaults to Web. 'All' is not valid for this command.

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: CustomActionScope
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Sequence
Sequence of this application customizer being injected. Use when you have a specific sequence with which to have multiple application customizers being added to the page.

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: Int
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Title
The title of the application customizer

Only applicable to: SharePoint Online, SharePoint Server 2019

```yaml
Type: String
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